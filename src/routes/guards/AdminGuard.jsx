import { Navigate, Outlet } from "react-router-dom"
import userInSession from "../../constantes/User"

export const AdminGuard = () => {
    return userInSession.role === "ADMINISTRADOR" ? <Outlet/> : <Navigate replace to={"/alojamientos"}/>
}