import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="todo">
      <form
        onSubmit={addTodoHandler}
        className="add-tasks flex justify-center items-end"
      >
        <Input
          type="text"
          name="todo"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
          className="placeholder:text-gray-500 tracking-wide text-lg"
        />
        <button
          type="submit"
          className="bg-blue-800 inline-block px-5 py-3 cursor-pointer rounded-r-md border-blue-800 border-l-0 border-2"
        >
          <MdAdd className="text-white text-2xl inline-block" />
        </button>
      </form>
    </div>
  );
};

export default Todo;
