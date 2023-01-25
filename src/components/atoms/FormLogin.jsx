import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

function FormLogin() {
  const[username,setUsername]=useState('')

  const handlerFocus = ()=>{
    console.log('focus')

  }

  const handlerChange =(e) =>{
   setUsername(e.target.value)
  }

  const handlerClick =(e)=>{
    e.preventDefault();ñ
    console.log(username)
  }

  return (
    <div>
      <img src={Logo} alt="Logo de la empresa" />
      <form>
        <input type="text"  onFocus={ handlerFocus} onChange= {handlerChange} value={username}  />
        <input type="password" />
        <button onClick={handlerClick}>Iniciar sesión</button>
        <Link to="/register">Regístrate</Link>
      </form>
    </div>
  );
}

export default FormLogin;
