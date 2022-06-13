import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/clientes";

const ShowClientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    const res = await axios.get(URI);
    setClientes(res.data);
  };

  const deleteCliente = async (id) => {
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
        Swal.fire("Eliminado!", "El dato ha sido eliminado", "success");
        getClientes();
      }
    });
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/create" className="btn btn-primary mt-2 mb-2">
              <div>
                <i className="fa-solid fa-plus"> Crear cliente</i>
              </div>
            </Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id Cliente</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Direcciòn</th>
                  <th scope="col">Fecha creaciòn</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.direccion}</td>
                    <td>{cliente.createdAt}</td>
                    <td>
                      <Link
                        to={`/edit/${cliente.id}`}
                        className="btn btn-info button1"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button
                        onClick={() => deleteCliente(cliente.id)}
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

export default ShowClientes;
