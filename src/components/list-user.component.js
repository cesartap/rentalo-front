import React, { Component } from 'react';
import axios from 'axios'; // Conexion con BD
// import { Link } from 'react-router-dom';

const UserTableResults = props => (
    <tr>
      <td>{props.listaDeUsuarios.username}</td>
      <td>{props.listaDeUsuarios.createdAt}</td>
    </tr>
  )


export default class ListUser extends Component {
    constructor(props) {
        super(props);

        // Estado Inicial
        this.state = { usuarios: [] };
    }

    //  LLamado inmediato al cargar el componente
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ usuarios: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //  Metodo llamado desde el render()
    userList() {
        return this.state.usuarios.map(result => {
            return <UserTableResults listaDeUsuarios={result} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Usuarios Rendalo! Registrados</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nombre de Usuario</th>
                            <th>Fecha de Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}