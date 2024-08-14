import React from 'react'
import './login.css'
import { VscBook } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginContainer'>
      <span className='logoSpan'>
        <VscBook />
      </span>


      <div className='formLoginContent'>
        <h1>Login</h1>


        <input type="email" name="" id="emailIpt" placeholder='Email' />
        <input type="password" name="" id="passIpt"
          placeholder='Senha' />

        <Link to={"/home"}>
          <button className='loginBtn'>Login</button>
        </Link>
        <Link to={"/home"}>
          <p className='visitantePage'>Entrar como visitante</p>
        </Link>

        <Link to={"/cadastro"}>
          <p className='cadPageBtn'>Não tem conta? Cadastre-se!</p>
        </Link>


      </div>


    </div>
  )
}

export default Login