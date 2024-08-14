import React from 'react'
import "./AddAviso"
import { Link } from 'react-router-dom'
import Navbar from '../../componentes/Navbar/Navbar'

const AddAviso = () => {
  return (
    <div className='atividadesContainer'>

    <div className='actvTitle'>
        <h3>Registrar aviso</h3>
    </div>

    <div className='formAddAtv'>
        <input type="text" name="" id="" placeholder='Nome' />
      
        <input type="text" name="" id="" placeholder='Descrição' />

    </div>

    <div className='addAtvBtns'>

        <Link to={"/avisos"}>
            <button id='cancelarBtn'> Cancelar</button>
        </Link>
        <Link to={"/avisos"}>
            <button id='salvarBtn'> Salvar </button>
        </Link>
    </div>



    <Navbar />
</div>
  )
}

export default AddAviso