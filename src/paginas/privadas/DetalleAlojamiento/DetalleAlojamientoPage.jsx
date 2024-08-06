import CheckRolUsuario from "../../../utilities/CheckRolUsuario";
import DetalleAlojamiento from "./componentes/DetalleAlojamiento";

function DetalleAlojamientoPage() {
    return <div className="center_presentation">
        <DetalleAlojamiento />
        {CheckRolUsuario(<h2>Componente oculto para el invitado</h2>)}
    </div>
}

export default DetalleAlojamientoPage;