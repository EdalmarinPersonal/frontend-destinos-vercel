import { Link, Outlet } from "react-router-dom";
const DestinosTemplate = () => {
    return (
        <>
            <header>
                <h1>Destinos</h1>
                <Link to={"/destinos/listado"}>Todos los destinos</Link>
                <Link to={"/destinos/agregar"}>Agregar destino</Link>
            </header>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default DestinosTemplate;
