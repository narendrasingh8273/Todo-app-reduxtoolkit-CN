import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { notesAction, notesSelector } from "../../redux/reducers/notesReducer";

function NoteList() {
  const notes = useSelector(notesSelector);
  const disptach = useDispatch();
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => disptach(notesAction.delete(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
