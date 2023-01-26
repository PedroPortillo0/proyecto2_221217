import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

function FormLogin() {
  const [descripcion, setDescription]=useState({username:"", password:""})
  //let descripcion ="soy un componente label"
  const[username,setUsername]=useState('')

  const handlerFocus = ()=>{
    console.log('focus')

  }

  const handlerChange =(e) =>{
   setDescription({username: e.target.value, password:descripcion.password})
  }

  const handlerClick =(e)=>{
    e.preventDefault();
    console.log(username)
    setDescription({msn:"hola", v:1, alias:"by"})
  }
//los estados son asincronos
//los estados son inmutables 

  return (
    <div>
      <img src={Logo} alt="Logo de la empresa" />
      <form>
        <input type="text" value={descripcion.username} onFocus={ handlerFocus} onChange= {handlerChange} />
        <input type="password" value={descripcion.password}/>
        <button onClick={handlerClick}>Iniciar sesión</button>
        <div>
        <label >{descripcion.msn}</label>
      </div>
        <Link to="/register">Regístrate</Link>
      </form>
    </div>
    
  );
}

export default FormLogin;
