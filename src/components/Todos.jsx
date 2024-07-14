import React, { useEffect } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  return (
    <div className="todos mt-20">
      <ul className="container mx-auto flex flex-wrap gap-10">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="card w-full h-auto bg-blue-800 px-5 py-3 shadow-lg rounded-md text-white text-lg tracking-wide flex justify-between items-center"
          >
            <p>{todo.text}</p>
            <div className="actions flex gap-4 text-xl">
              <FaRegEdit className="cursor-pointer text-blue-600" />
              <FaRegTrashAlt
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="cursor-pointer text-red-600"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
