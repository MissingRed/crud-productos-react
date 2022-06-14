import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const URI = "http://localhost:8000/clientes";

const CompCreateCliente = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  //Guardar

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      direccion: direccion,
    });
    navigate("/");
  };

  return (
    <div className="home">
      <Navbar />
      <div>
        <h3>Crear Cliente</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Direcciòn</label>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompCreateCliente;
