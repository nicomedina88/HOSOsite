import { Navigate, Outlet } from "react-router-dom"
import userInSession from "../../constantes/User"

export const AuthGuard = () => {
    return userInSession.role !== "INVITADO" ? <Outlet/> : <Navigate replace to={"/login"}/>
}