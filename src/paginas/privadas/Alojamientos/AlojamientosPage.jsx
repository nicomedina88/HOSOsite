import Alojamientos from "./componentes/Alojamientos"
import CheckRolUsuario from "../../../utilities/CheckRolUsuario.jsx"

function AlojamientosPage() {
    return (
        <div className="center_presentation">
            <Alojamientos />
            {CheckRolUsuario(<h2>Componente oculto para el invitado</h2>)} {/* Esto solo podran verlo los 
            usuarios con roles que no sean de invitados (admin, anfitrion, residente)*/}
        </div>
    )
}

export default AlojamientosPage
