import userInSession from "../constantes/User";

function CheckRolUsuario (component){
    return userInSession.role !== "INVITADO" && component;
}

export default CheckRolUsuario;