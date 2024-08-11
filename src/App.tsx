import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <a href="https://vitejs.dev" target="_blank" className="p-4">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="p-4">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl text-center text-white">Vite + React</h1>
      <div className="card p-4 border border-gray-700 rounded-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-300">Edit hello.tsx</p>
      </div>
      <p className="text-center text-gray-400 mt-4">Click on the Vite logo</p>
    </>
  );
}
export default App;
