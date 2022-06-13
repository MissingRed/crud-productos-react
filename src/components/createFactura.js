import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/facturas";
const URI2 = "http://localhost:8000/clientes";
const URI3 = "http://localhost:8000/productos";

const CreateFactura = () => {
  const [cantidad, setCantidad] = useState(0);
  const [id_producto, setId_producto] = useState(0);
  const [id_cliente, setId_cliente] = useState(0);

  const [total, setTotal] = useState(0);

  const [valor, setValor] = useState(0);

  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);

  const [condition, setCondition] = useState([]);
  const [condition1, setCondition1] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProductos();
    getClientes();
  }, []);

  const getProductos = async () => {
    const res = await axios.get(URI3);
    setProductos(res.data);
    const ids = [];

    for (const i in res.data) {
      ids.push(res.data[i].id);
      setCondition(ids);
    }
    const valorx = await getValorProducto(3);
    setValor(valorx);
  };

  const getValorProducto = async (id) => {
    const res = await axios.get(`${URI3}/${id}`);
    const total = res.data.valor;
    return total;
  };

  const getClientes = async () => {
    const res = await axios.get(URI2);
    setClientes(res.data);
    const ids = [];

    for (const i in res.data) {
      ids.push(res.data[i].id);
      setCondition1(ids);
    }
  };

  //Guardar

  const store = async (e) => {
    e.preventDefault();
    const found = condition.find((element) => element == id_producto);
    const found1 = condition1.find((element) => element == id_cliente);

    if (found == undefined || found1 == undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No existe el cliente",
      });
    } else {
      await axios.post(URI, {
        id_producto: id_producto,
        id_cliente: id_cliente,
        cantidad: cantidad,
        total: total,
      });
      navigate("/Facturas");
    }
  };

  return (
    <div>
      <h3>Crear Factura</h3>
      <form onSubmit={store}>
        <div>
          <datalist id="browsers">
            {productos.map((producto) => (
              <option key={producto.id}>{producto.id}</option>
            ))}
          </datalist>
          <datalist id="clientes">
            {clientes.map((cliente) => (
              <option key={cliente.id}>{cliente.id}</option>
            ))}
          </datalist>
        </div>
        <div className="mb-3">
          <label className="form-label">Id Producto</label>
          <input
            list="browsers"
            className="form-control"
            onChange={(e) => setId_producto(e.target.value)}
          />
          <label className="form-label">Id Cliente</label>
          <input
            list="clientes"
            className="form-control"
            onChange={(e) => setId_cliente(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            onChange={(e) => setCantidad(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Total</label>

          <input
            value={valor}
            onChange={(e) => setTotal(e.target.value)}
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

export default CreateFactura;
