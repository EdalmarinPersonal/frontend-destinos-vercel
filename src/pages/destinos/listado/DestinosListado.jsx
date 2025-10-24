import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DestinosListado = () => {
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDestinations();
  }, []);

  //funcion para obtener destinos
  const getDestinations = async () => {
    try {
      const result = await axios.get("http://localhost:3000/destinations", {
        withCredentials: true,
      });
      setLista(result.data);
    } catch (error) {
      console.error("Error al obtener destinos:", error);
      if(error.response.status === 401){
        navigate("/login");///PARA REEENVIO A LOGIN SI NO ESTA AUTENTICADO
      }
    }
  };

  ///función para ver detalle
  const verDetalle = (id) => {
    navigate(`/destinos/detalle/${id}`);
  };

  return (
    <>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>título</th>
            <th>Detalle</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((itemTabla, index) => {
            return (
              <tr key={itemTabla._id}>
                <td>{itemTabla.place}</td>
                <td>
                  <button onClick={() => verDetalle(itemTabla._id)}>Ver</button>
                </td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default DestinosListado;
