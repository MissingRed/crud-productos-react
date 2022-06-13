import React from "react";
import Navbar from "../components/navbar";
import ShowClientes from "./showCliente";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <ShowClientes />
    </div>
  );
};

export default Home;
