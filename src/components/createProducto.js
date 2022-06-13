import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/productos";

const CreateProducto = () => {
  const [nombre_producto, setNombre_producto] = useState("");
  const [valor, setValor] = useState(0);
  const navigate = useNavigate();

  //Guardar

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre_producto: nombre_producto,
      valor: valor,
    });
    navigate("/productos");
  };

  return (
    <div>
      <h3>Crear Producto</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre Producto</label>
          <input
            value={nombre_producto}
            onChange={(e) => setNombre_producto(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateProducto;
