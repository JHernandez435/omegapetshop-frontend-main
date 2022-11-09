import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormUsuarios from "./componentes/usuarios/FormUsuarios";
import FormProductos from "./componentes/productos/FormProductos";
import ListadoUsuarios from "./componentes/usuarios/ListadoUsuarios";
import ListadoProductos from "./componentes/productos/ListaProductos";
import ListaFormCategorias from "./componentes/categorias/ListaFormCategorias";
import FormEdicionCategoria from "./componentes/categorias/FormEdicionCategoria";
import Header from "./componentes/general/Header";
import Cuerpo from "./componentes/general/Cuerpo";
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cuerpo/>} exact></Route>
          <Route path="/usuarios" element={<ListadoUsuarios/>} exact></Route>
          <Route path="/productos" element={<ListadoProductos/>} exact></Route>
          <Route path="/usuarios/form" element={<FormUsuarios/>} exact></Route>
          <Route path="/productos/form" element={<FormProductos/>} exact></Route>
          <Route path="/categorias" element={<ListaFormCategorias/>} exact></Route>
          <Route path="/categorias/form/:id" element={<FormEdicionCategoria/>} exact></Route>
          {/* <Route path="/usuarios/form/:id" element={<FormUsuarios/>} exact></Route> */}
          {/* <Route path="/agentes" element={<ListadoAgentes/>} exact></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;