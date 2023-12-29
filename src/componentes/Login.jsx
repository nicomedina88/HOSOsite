// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import logo2 from '../img/hoso2.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="white-section">
        <div className="login-form">
          <h2>¡Hola, bienvenido de nuevo!</h2>
          <form onSubmit={handleSubmit}>
            <label className='casilla'>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Nombre de usuario o correo electrónico:'/>
            </label>
            <br />
            <label className='casilla'>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña:'/>
            </label>
            <br />
            <div className="additional-info">
              <div className="checkbox-container">
                <input type="checkbox" />
                <span className='info'>Mantenme conectado</span>
              </div>
              <div>
                <span  className='info'>¿Contraseña olvidada?</span>
              </div>
            </div>
            <br />
            <button type="submit"  className='boton'>Acceder</button>
          </form>
        </div>
      </div>
      <div className="pink-section">
        <div className="logo-container">
          <img src={logo2} alt="Logo del proyecto HOSO" className="logologin"/>
          <h1 className='titulogo'>HOSO</h1>
          <h3 className="slogan">Abrazando a estudiantes del mundo</h3>
        </div>
      </div>
    </div>
  ); 
};

export default Login;
