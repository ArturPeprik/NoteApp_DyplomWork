import { Link } from "react-router-dom";
import useNoteStore from "../store/noteStore";

const NoteItem = ({ note }) => {
  const { deleteNote } = useNoteStore();

  const handleDelete = async () => {
    await deleteNote(note.id);
  };

  return (
    <li>
      <h3>{note.title}</h3>
      <p>
        <strong>Category:</strong> {note.category}
      </p>
      <p>
        <strong>Content:</strong> {note.content}
      </p>
      <Link to={`/edit/${note.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default NoteItem;
