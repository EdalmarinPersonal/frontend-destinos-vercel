import { Link, Outlet } from "react-router-dom";

const AuthTemplate = () => {
  return (
    <>
      <header>
        <h1>Destinos</h1>
        <Link to="/login">Login </Link>
        <Link to="/registro">Registro </Link>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AuthTemplate;
