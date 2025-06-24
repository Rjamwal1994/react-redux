import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../featrures/todo/TodoSlice";
import { Pencil, Trash2 } from "lucide-react";

function TodoList() {
  const [updatedValue, setUpdatedValue] = useState({
    id: "",
    name: "",
  });
  const toDo = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  console.log(toDo);

  const handleupdateToDo = (e) => {
    e.preventDefault();
    dispatch(updateTodo(updatedValue));
    setUpdatedValue({
      id: "",
      name: "",
    });
  };
  const handleEditTodo = (data) => {
    setUpdatedValue({
      id: data?.id,
      name: data?.name,
    });
  };

  return (
    <>
      <AddTodo />
      <div>
        <h3 className="text-xl font-semibold mb-4">To do List</h3>
        <div className="w-full flex justify-center flex-col items-center">
          {toDo?.length > 0 &&
            toDo?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="bg-gray-900 p-2 text-white list-none font-lg justify-between w-full max-w-[70%] flex items-center rounded-md mb-4"
                >
                  {updatedValue?.id == item?.id ? (
                    <>
                      <form onSubmit={handleupdateToDo} className="w-full flex">
                        <div className="w-full flex gap-4 justify-between my-2">
                          <input
                            type="text"
                            className="p-2 rounded-md bg-black text-white max-w-[90%] w-[500px]"
                            placeholder="Add to do "
                            value={updatedValue?.name}
                            onChange={(e) =>
                              setUpdatedValue((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                          <button className="py-2 px-4 rounded-md bg-red-600 text-white flex items-center gap-2">
                            {" "}
                            Update <Pencil size={18} />
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      {item?.name}
                      <div className="actions flex gap-2">
                        <button
                          className="bg-green-600 p-2 rounded-md"
                          onClick={() => handleEditTodo(item)}
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => dispatch(removeTodo(item))}
                          className="bg-red-600 p-2 rounded-md"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TodoList;
