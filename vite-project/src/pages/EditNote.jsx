import { useParams } from "react-router-dom";
import useNoteStore from "../store/noteStore";
import NoteForm from "../components/NoteForm";

const EditNote = () => {
  const { id } = useParams();
  const { notes } = useNoteStore();
  const noteToEdit = notes.find((note) => note.id === parseInt(id));

  return (
    <div>
      <h2>Edit Note</h2>
      <NoteForm note={noteToEdit} isEditing />
    </div>
  );
};

export default EditNote;
