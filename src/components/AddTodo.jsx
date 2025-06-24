import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../featrures/todo/TodoSlice";
import { Pencil, Plus } from "lucide-react";

function AddTodo({ props }) {
  const [input, setInput] = useState("");
  const toDo = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleAddToDo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  const [updateToDo, setUpdateTodo] = useState(false);

  if (toDo.includes(props?.editTodo?.id)) {
    setUpdateTodo(true);
  }

  return (
    <>
      <form onSubmit={handleAddToDo}>
        <div className="w-full flex gap-4 justify-center my-2">
          <input
            type="text"
            className="p-2 rounded-md bg-black text-white"
            placeholder="Add to do "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="py-2 px-4 rounded-md bg-red-600 text-white flex items-center gap-2">
            {" "}
            Add To Do <Plus size={18} />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
