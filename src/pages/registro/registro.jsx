import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Registro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //variables para errores
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");

  const navigate = useNavigate();
  const register = async () => {
    //validacion nombre
    if (!name.trim()) {
      setErrorName("Por favor proporciona tu nombre");
      return;
    } else {
      setErrorName("");
    }

    //validacion apellido
    if (!lastName.trim()) {
      setErrorLastName("Por favor proporciona tu apellido");
      return;
    } else {
      setErrorLastName("");
    }

    if (!email.trim()) {
      setErrorEmail("Por favor proporciona tu email");
      return;
    } else {
      setErrorEmail("");
    }
    //validacion password
    if (!password.trim() || password.length < 8) {
      setErrorPassword(
        "Por favor proporciona una contraseña de al menos 8 caracteres"
      );
      return;
    } else {
      setErrorPassword("");
    }
    //validacion confirmacion password
    if (!confirmPassword.trim) {
      setErrorConfirmPassword("Por favor proporciona una contraseña");
      return;
    } else {
      setErrorConfirmPassword("");
    }
    if (password !== confirmPassword) {
      setErrorRepeatPassword("Las contraseñas no coinciden");
      return;
    } else {
      setErrorRepeatPassword("");
    }

    //enviar datos al backend
    try {
      var result = await axios.post("http://localhost:3000/users/register", {
        firstName: name,
        lastName: lastName,
        email: email,
        password: password,
      });

      navigate("/login");///redirigir a login
      console.log(result.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert("Error: "+error.response.data.message);
      }
    }
  };

  return (
    <>
      <h2>Registro</h2>
      <label>Nombre</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errorName && <p style={{ color: "red" }}>{errorName}</p>}
      <br />

      <label>Apellido</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {errorLastName && <p style={{ color: "red" }}>{errorLastName}</p>}
      <br />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
      <br />

      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
      <br />

      <label> Repetir Contraseña</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errorRepeatPassword && (
        <p style={{ color: "red" }}>{errorRepeatPassword}</p>
      )}
      <br />

      <button onClick={register}>Registrarse</button>
    </>
  );
};

export default Registro;
