import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./pages/registro/registro.jsx";
import Login from "./pages/login/login.jsx";
import AuthTemplate from "./templates/authTemplate.jsx";
import DestinosTemplate from "./templates/destinosTemplate.jsx";
import DestinosListado from "./pages/destinos/listado/DestinosListado.jsx";
import DestinoAgregar from "./pages/destinos/agregar/DestinoAgregar.jsx";
import DestinoDetalle from "./pages/destinos/detalle/DestinoDetalle.jsx";
import DestinoActualizar from "./pages/destinos/actualizar/DestinoActualizar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthTemplate></AuthTemplate>}>
            <Route path="/registro" element={<Registro> </Registro>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Route>

          <Route path="/destinos" element={<DestinosTemplate></DestinosTemplate>}>
            <Route path="listado" element={<DestinosListado></DestinosListado>}></Route>
            <Route path="agregar" element={<DestinoAgregar></DestinoAgregar>}></Route>
            <Route path="detalle/:id" element={<DestinoDetalle></DestinoDetalle>}></Route>
            <Route path="actualizar" element={<DestinoActualizar></DestinoActualizar>}></Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
