import { PenSquareIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";

const NoteCard = () => {
  return ( <Link to={`/note/${note._id}`}
  className="card bg-base-100 hover:shadow-lg transition-shadow duration-300 
  border-t-4 border-solid border-[#00ff9d]"
  >
    <div className="card-body">
        <h3 className="card-title tetx-base-content">{note.title}</h3>
        <p className="text-bas-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
            {formatDate(new Date (note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
                <PenSquareIcon className="size-4 "/>
                <button className="btn btn-ghost btn-xs text-error"> 
                    <TrashIcon className="size-4 text-red-500"/>
                </button>
            </div>
        </div>
    </div>
  </Link>
  )
}

export default NoteCard
