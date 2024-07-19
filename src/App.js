import React from "react";
import "./App.css";
import ListClientesComponent from "./components/ListClientesComponent";
import HeaderCompontent from "./components/HeaderCompontent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddClientesComponent from "./components/AddClientesComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderCompontent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListClientesComponent />} />
            <Route path="/clientes" element={<ListClientesComponent />} />
            <Route path="/add-clientes" element={<AddClientesComponent />} />
            <Route
              path="/edit-clientes/:id"
              element={<AddClientesComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
