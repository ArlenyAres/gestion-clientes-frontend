import React, { useEffect, useState } from "react";
import ClienteServices from "../services/ClienteServices";
import { useNavigate, Link, useParams } from "react-router-dom";

const AddClientesComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, email };

    if (id) {
        ClienteServices.updateCliente(id,cliente)
          .then((response) => {
            console.log(response.data);
            navigate("/clientes");
          })
          .catch((error) => {
            console.log(error);
          });
    } 
    else {
        ClienteServices.createCliente(cliente)
          .then((response) => {
            console.log(response.data);
            navigate("/clientes");
          })
          .catch((error) => {
            console.log(error);
          })
    }
  };

  useEffect(() => {
    ClienteServices.getClienteById(id)
      .then((response) => {
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      })
  },[id])

  const title = () => {
    if(id){
    return <h2 className="text-center">Editar Cliente</h2>;
  }
    else {
      return <h2 className="text-center">Agregar Cliente</h2>;
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">{title()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Introduzca Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Apellido</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Introduzca Apellido"
                    name="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Introduzca Email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateCliente(e)}
                >
                  Guardar
                </button>
                &nbsp;&nbsp;
                <Link to="/clientes" className="btn btn-danger">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientesComponent;
