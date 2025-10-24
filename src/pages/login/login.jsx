import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//componente login
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  ///estado error
  const [error, setError] = useState("");

  const {
    register,
    trigger,
    getValues,
    formState: { errors }

  } = useForm();

  const navigate = useNavigate(); //hook para redireccionar

  //funcion para login
  const login = async () => {
    //
    try {
      var result = await axios.post("https://backend-vercel-examen-28tf.vercel.app/users/login", {
        "email": email,
        "password": password,
      }, {
        withCredentials: true
      });

      if (result.data.found === false) {
        setError("credenciales incorrectas");
      } else {
        navigate("/destinos/listado"); //redireccionar a listado de destinos
      }

    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert("Error: "+error.response.data.message);
      }
    }
  };

  return (
    <>
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};
export default Login;
