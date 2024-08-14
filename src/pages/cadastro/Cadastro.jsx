import React from 'react'
import { VscBook } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import "./cadastro.css"
import { VscArrowLeft } from "react-icons/vsc";

const Cadastro = () => {
  return (
    <div className='cadContainer'>
      <span className='cadastreTitle'>
        <Link to={"/login"}>
          <span><VscArrowLeft/></span>
        </Link>
      
        <p>Cadastre-se</p>
      </span>


      <div className='formCadContent'>


        <input type="text" name="" id="" placeholder='Primeiro nome' />

        <input type="text" name="" id=""
          placeholder='Sobrenome' />

        <input type="email" name="" id="emailIptCad" placeholder='Email' />

        <input type="password" name="" id="passIpt"
          placeholder='Senha' />

        <input type="password" name="" id="passIpt"
          placeholder='confirme a senha' />

        <Link to={"/login"}>
          <button className='cadBtn'>Cadastre-se</button>
        </Link>

        <Link to={"/login"}>
          <p className='logPageBtn'>Já tem conta? Faça login!</p>
        </Link>


      </div>


    </div>
  )
}

export default Cadastro