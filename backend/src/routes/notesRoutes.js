import express from 'express';
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
} from '../controllers/notesController.js';
import authMiddleware from '../../middleware/authMiddleware.js';
import Note from '../../models/Note.js';

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  console.log("Notes route hit for user:", req.user._id);
  try {
    const notes = await Note.find({ userId: req.user._id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" });
  }
});


router.get("/:id", authMiddleware, getAllNotes);
router.post("/", authMiddleware, createNote);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

export default router;
