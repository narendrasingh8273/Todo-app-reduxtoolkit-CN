import { useSelector, useDispatch } from "react-redux";

import "./ToDoList.css";
import {
  getInitialState,
  todoActions,
  todoSelector,
} from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const disptach = useDispatch();

  useEffect(() => {
    //fetching data from api using normal fetch function
    // fetch("http://localhost:4100/api/todos")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data, "data"));

    //fetching data from api using axios
    // axios.get("http://localhost:4100/api/todos").then((res) => {
    //   console.log(res.data, "resposne")
    //   disptach(todoActions.setInitailState(res.data));
    // });

    // fetching using redux thunk
    disptach(getInitialState());
  }, [disptach]);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                disptach(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
