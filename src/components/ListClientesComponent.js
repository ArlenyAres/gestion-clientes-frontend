import React, { useEffect, useState } from "react";
import ClienteService from "../services/ClienteServices";
import { Link } from "react-router-dom";

const ListClientesComponent = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
   
      ClienteService.getAllClientes()
        .then((response) => {
          setClientes(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
  },[]);

  

  const deleteCliente = (clienteId) => {
    ClienteService.deleteCliente(clienteId)
      .then((response) => {
        setClientes(clientes.filter((cliente) => cliente.id !== clienteId));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="container">
      <h2 className="text-center mt-5">Lista de Clientes</h2>
      <Link to="/add-clientes" className="btn btn-success mb-2 ">
        Agregar Cliente
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.email}</td>
              <td>
                <Link className="btn btn-info "to={`/edit-clientes/${cliente.id}`}
                >Actualizar </Link>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-danger"
                  onClick={() => deleteCliente(cliente.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClientesComponent;
