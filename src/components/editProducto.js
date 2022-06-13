import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/productos/";

const EditProducto = () => {
  const [nombre_producto, setNombre_producto] = useState("");
  const [valor, setValor] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre_producto: nombre_producto,
      valor: valor,
    });
    navigate("/productos");
  };

  useEffect(() => {
    getProductoById();
  }, []);

  const getProductoById = async () => {
    const res = await axios.get(URI + id);
    setNombre_producto(res.data.nombre_producto);
    setValor(res.data.valor);
  };

  return (
    <div>
      <h3>Edit POST</h3>
      <form onSubmit={update}>
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
          <textarea
            value={valor}
            onChange={(e) => setValor(e.target.value)}
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

export default EditProducto;
