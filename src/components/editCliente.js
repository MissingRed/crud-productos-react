import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/clientes/";

const EditCliente = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      direccion: direccion,
    });
    navigate("/");
  };

  useEffect(() => {
    getClienteById();
  }, []);

  const getClienteById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setDireccion(res.data.direccion);
  };

  return (
    <div>
      <h3>Edit POST</h3>
      <form onSubmit={update}>
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
          <textarea
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditCliente;
