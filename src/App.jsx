import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>First attempt to create aproject with React Redux</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <TodoList />
    </>
  );
}

export default App;
