import React from "react";
import { Todo } from "./sources/todo/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/:id" element={<h1>Page Détail</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
