import './DetalleAlojamiento.css'
import { useParams } from "react-router-dom";

function DetalleAlojamiento() {
    const { id } = useParams()
    
    return <div>
        <h1>Detalle del alojamiento {id} </h1>
    </div>
}
export default DetalleAlojamiento;