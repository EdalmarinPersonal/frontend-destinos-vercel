import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const DestinoAgregar = () => {
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tips, setTips] = useState("");
  const [epoca, setEpoca] = useState("");
  const [costo, setCosto] = useState("");

  //variables para errores
  const [errorLugar, setErrorLugar] = useState("");
  const [errorDescripcion, setErrorDescripcion] = useState("");
  const [errorTips, setErrorTips] = useState("");
  const [errorEpoca, setErrorEpoca] = useState("");
  const [errorCosto, setErrorCosto] = useState("");

  ///hook para redireccionar
  const navigate = useNavigate();

  ///funcion agregar destino
  const agregar = () => {
    if (!lugar.trim()) {
      setErrorLugar("Por favor proporciona el lugar");
      return;
    } else {
      setErrorLugar("");
    }

    if (!descripcion.trim()) {
      setErrorDescripcion("Por favor proporciona la descripción");
      return;
    } else {
      setErrorDescripcion("");
    }

    if (!tips.trim()) {
      setErrorTips("Por favor proporciona los tips");
      return;
    } else {
      setErrorTips("");
    }

    if (epoca === "") {
      setErrorEpoca("Por favor proporciona la época");
      return;
    } else {
      setErrorEpoca("");
    }

    if (costo === "" || costo <= 0) {
      setErrorCosto("Por favor proporciona el costo");
      return;
    } else {
      setErrorCosto("");
    }
    //enviar al backend
    try {
      var result = axios.post(
        "http://localhost:3000/destinations",
        {
          place: lugar,
          description: descripcion,
          tips: tips,
          bestSeason: epoca,
          price: costo,
        },
        {
          withCredentials: true,
        }
      );

      navigate("/destinos/listado"); //redireccionar a listado

      console.log("Destino agregado:", result.data);
    } catch (error) {
      console.error("Error al agregar destino:", error);
    }
  };

  return (
    <>
      <h2>Agregar Destino</h2>
      <label>Lugar:</label>
      <input
        type="text"
        value={lugar}
        onChange={(e) => setLugar(e.target.value)}
      />
      {errorLugar && <p style={{ color: "red" }}>{errorLugar}</p>}
      <br />
      <br />
      <label>Descripción:</label>
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      {errorDescripcion && <p style={{ color: "red" }}>{errorDescripcion}</p>}
      <br />
      <br />
      <label>Tips Viajeros:</label>
      <textarea
        value={tips}
        onChange={(e) => setTips(e.target.value)}
      ></textarea>
      {errorTips && <p style={{ color: "red" }}>{errorTips}</p>}
      <br />
      <br />
      <label>Mejor época para visitar:</label>
      <select value={epoca} onChange={(e) => setEpoca(e.target.value)}>
        <option value="">Seleccione</option>
        <option value="verano">Verano</option>
        <option value="otono">Otoño</option>
        <option value="invierno">Invierno</option>
        <option value="primavera">Primavera</option>
      </select>
      {errorEpoca && <p style={{ color: "red" }}>{errorEpoca}</p>}
      <br />
      <br />
      <label>Costo Promedio:</label>
      <input
        type="Number"
        value={costo}
        onChange={(e) => setCosto(e.target.value)}
      />
      {errorCosto && <p style={{ color: "red" }}>{errorCosto}</p>}
      <br />
      <br />
      <button onClick={agregar}>Agregar</button>
    </>
  );
};
export default DestinoAgregar;
