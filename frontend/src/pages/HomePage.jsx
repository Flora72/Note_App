import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(res.data.username);
      } catch {
        toast.error("Failed to load user info");
      }
    };

const fetchNotes = async () => {
  try {
    const res = await api.get("/notes");

    if (Array.isArray(res.data)) {
      setNotes(res.data);
    } else {
      console.warn("Unexpected notes response:", res.data);
      setNotes([]);
    }
    setIsRateLimited(false);
  } catch (error) {
    if (error.response?.status === 429) {
      setIsRateLimited(true);
    } else if (error.response?.status === 404) {
      setNotes([]);
    } else {
      console.error("Notes fetch error:", error);
      toast.error("Something went wrong while loading your notes");
    }
  } finally {
    setLoading(false);
  }
};



    fetchUser();
    fetchNotes();
  }, [navigate]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {username && (
          <div className="text-xl font-semibold text-primary mb-4">
            {getGreeting()}, {username}
          </div>
        )}

        {isRateLimited && <RateLimitedUI />}

        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
