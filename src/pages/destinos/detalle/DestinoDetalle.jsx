import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const DestinoDetalle = () => {
    const  { id } = useParams();
    const [destino, setDestino] = useState(null);

   /* useEffect(() => {
        const getDestino = async () => {
            const result = await axios.get(`http://localhost:3000/destinations/${id}`, {
                withCredentials: true,
            });
            setDestino(result.data);
        };
        getDestino();
    }, [id]);

    if (!destino) return <p>Cargando...</p>;
*/
    return (
        <>
            <h2>Detalle del Destino</h2>
            <p>Aqui va el detalle del destino {id}</p>
        </>
    )
};
export default DestinoDetalle;
