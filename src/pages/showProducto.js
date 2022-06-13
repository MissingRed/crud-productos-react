import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/productos";

const ShowProducto = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const res = await axios.get(URI);
    setProductos(res.data);
  };

  const deleteProducto = async (id) => {
    await Swal.fire({
      title: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URI}/${id}`);
        Swal.fire("Eliminado!", "La factura se ha sido eliminado", "success");
        getProductos();
      }
    });
  };

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/createProducto" className="btn btn-primary mt-2 mb-2">
              <div>
                <i className="fa-solid fa-plus"> Crear Producto</i>
              </div>
            </Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id Producto</th>
                  <th scope="col">Nombre del producto</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Fecha creaciòn</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre_producto}</td>
                    <td>{producto.valor}</td>
                    <td>{producto.createdAt}</td>
                    <td>
                      <Link
                        to={`/editProducto/${producto.id}`}
                        className="btn btn-info button1"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button
                        onClick={() => deleteProducto(producto.id)}
                        className="btn btn-danger button1"
                      >
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProducto;
