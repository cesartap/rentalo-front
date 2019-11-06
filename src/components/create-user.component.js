import React, { Component } from 'react';
import axios from 'axios'; // Conexion con BD

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        // Asignacion de los objetos
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Estado Inicial
        this.state = {
            username: ''
        }
    }

    // Cuando cambie algun valor del textbox Username
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    // Cuando se haga submit
    onSubmit(e) {
        e.preventDefault(); // Prevenir el cambio de pagina

        //  Variable de usuario
        const user = {
            username: this.state.username
        }

        // Se envia la informacion al Backend    
        axios.post('http://localhost:5000/users/add', user)
            .then(res => this.sucessSave(res)
            );


    }

    // Se logro guardar
    sucessSave(data) {
        console.log(data);

        // Se reinicia la variable despues de ser guardado
        this.setState({
            username: ''
        })

        // Se reinicia la visual al inicio
        window.location = '/';
    }

    // Formulario
    render() {
        return (
            <div>
                <h3>Agregar un nuevo Usuario </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre de Usuario a agregar: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Agregalo!" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}