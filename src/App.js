/*eslint-disable*/
import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./CRUD/main";
import Update from "./CRUD/Update";
import Delete from "./CRUD/Delete";

function App() {
  return (
    <div className="center">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
