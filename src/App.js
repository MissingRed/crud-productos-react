import ShowClientes from "./pages/showCliente";
import ShowFactura from "./pages/showFactura";
import ShowProducto from "./pages/showProducto";
import CompCreateCliente from "./components/createCliente";
import CreateFactura from "./components/createFactura";
import CreateProducto from "./components/createProducto";
import EditCliente from "./components/editCliente";
import EditProducto from "./components/editProducto";

import Home from "./pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/clientes" element={<ShowClientes></ShowClientes>} />

          <Route
            path="/create"
            element={<CompCreateCliente></CompCreateCliente>}
          />
          <Route
            path="/createFactura"
            element={<CreateFactura></CreateFactura>}
          />
          <Route
            path="/createProducto"
            element={<CreateProducto></CreateProducto>}
          />
          <Route path="/edit/:id" element={<EditCliente></EditCliente>} />
          <Route
            path="/editProducto/:id"
            element={<EditProducto></EditProducto>}
          />
          <Route path="/facturas" element={<ShowFactura></ShowFactura>} />
          <Route path="/productos" element={<ShowProducto></ShowProducto>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
