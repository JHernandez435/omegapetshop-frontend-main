import axios from "axios";

const UsuariosServicios = {};

UsuariosServicios.listarUsuarios = () => {
    return axios.get("http://localhost:8000/api/Usuarios");
}

// UsuariosServicios.buscarUsuarios = (criterio) => {
//     return axios.get("http://localhost:8080/api/usuarios?q="+criterio);
// }

// UsuariosServicios.buscarCliente = (id) => {
//     return axios.get("http://localhost:8080/api/usuarios/"+id);
// }

UsuariosServicios.guardarCliente = (usuario) => {
    return axios.post("http://localhost:8000/api/usuarios", usuario);
}

// UsuariosServicios.modificarCliente = (id, usuario) => {
//     return axios.put("http://localhost:8080/api/usuarios/"+id, usuario);
// }

// UsuariosServicios.borrarCliente = (id) => {
//     return axios.delete("http://localhost:8080/api/usuarios/"+id);
// }

export default UsuariosServicios;
