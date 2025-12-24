import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
import { notesAction } from "../../redux/reducers/notesReducer";
import { notificationActions, notificationSelector } from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const {message} = useSelector(notificationSelector)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(notesAction.add(noteText));
    setNoteText("");
  };

   if (message) {
      setTimeout(() => {
        dispatch(notificationActions.reset());
      }, 3000);
    }

  return (
    <div className="container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
