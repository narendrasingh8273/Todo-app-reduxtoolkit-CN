import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ToDoForm.css";
import { todoActions } from "../../redux/reducers/todoReducer";
import {
  notificationActions,
  notificationSelector,
} from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const { message } = useSelector(notificationSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(todoActions.add(todoText));
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
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
