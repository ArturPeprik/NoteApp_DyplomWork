import { useState, useEffect } from "react";
import useNoteStore from "../store/noteStore";
import { useNavigate, useParams } from "react-router-dom";

const NoteForm = ({ note, isEditing }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [category, setCategory] = useState(note ? note.category : "");
  const [content, setContent] = useState(note ? note.content : "");
  const { addNote, updateNote } = useNoteStore();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEditing) {
      const noteToEdit = useNoteStore.getState().notes.find((n) => n.id === parseInt(id));
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setCategory(noteToEdit.category);
        setContent(noteToEdit.content);
      }
    }
  }, [isEditing, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = { id: note?.id || Date.now(), title, category, content };

    if (isEditing) {
      await updateNote(newNote);
    } else {
      await addNote(newNote);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">{isEditing ? "Update" : "Add"} Note</button>
    </form>
  );
};

export default NoteForm;
