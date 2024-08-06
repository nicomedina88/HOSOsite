import React from 'react';
import './PerfilUsuario.css';
import { useParams } from 'react-router-dom';

const PerfilUsuario = () => {

    const { id } = useParams()

    return (
        <div>
            <h1>Bienvenido a tu perfil usuario {id} </h1>
        </div>
    );
};

export default PerfilUsuario;