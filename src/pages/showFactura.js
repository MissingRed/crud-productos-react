import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/facturas";

const ShowFactura = () => {
  const [facturas, setFacturas] = useState([]);
  useEffect(() => {
    getFacturas();
  }, []);

  const getFacturas = async () => {
    const res = await axios.get(URI);
    setFacturas(res.data);
  };

  const deleteFactura = async (id) => {
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
        getFacturas();
      }
    });
  };

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/createFactura" className="btn btn-primary mt-2 mb-2">
              <div>
                <i className="fa-solid fa-plus"> Crear Factura</i>
              </div>
            </Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id Factura</th>
                  <th scope="col">Id Producto</th>
                  <th scope="col">Id Cliente</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Fecha creaciòn</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {facturas.map((factura) => (
                  <tr key={factura.id}>
                    <td>{factura.id}</td>
                    <td>{factura.id_producto}</td>
                    <td>{factura.id_cliente}</td>
                    <td>{factura.cantidad}</td>
                    <td>{factura.total}</td>
                    <td>{factura.createdAt}</td>
                    <td>
                      <button
                        onClick={() => deleteFactura(factura.id)}
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

export default ShowFactura;
