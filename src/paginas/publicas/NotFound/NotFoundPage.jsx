import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function NotFoundPage () {
  const [count, setCount] = useState(false)

  useEffect(()=>{
    setTimeout(() => setCount(true), 5000)
  },[])
  
    return <div className="center_presentation">
      <h2>Lo sentimos, no se encontró la ruta :C</h2>
      {count ? (<Navigate to={"/private/alojamientos"}/>) : <h2>En instantes serás redireccionado a alojamientos</h2>}
    </div>
  }
  
  export default NotFoundPage;