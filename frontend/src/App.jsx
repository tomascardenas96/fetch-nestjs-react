import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<h1>Usuarios</h1>} />
          <Route path="/filter-user" element={<h1>Filtrar usuarios</h1>} />
          <Route path="/register" element={<h1>Registrar</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
