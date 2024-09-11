import { Link } from "react-router-dom";
import useNoteStore from "../store/noteStore";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNoteStore();

  return (
    <div>
      <h2>Notes</h2>
      <Link to="/new">Add New Note</Link>
      <ul>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
