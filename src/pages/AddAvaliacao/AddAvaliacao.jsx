import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../componentes/Navbar/Navbar'

const AddAvaliacao = () => {
  return (
    <div className='atividadesContainer'>
    <div className='actvTitle'>
        <h3>Adicionar Autoavalicação</h3>
    </div>

    <div className='formAddAtv'>
        <input type="date" name="" id="" />
        <input type="text" name="" id="" placeholder='Autoavalização sobre o dia' />
    
    </div>

    <div className='addAtvBtns'>

        <Link to={"/autoavaliacao"}>
            <button id='cancelarBtn'> Cancelar</button>
        </Link>
        <Link to={"/autoavaliacao"}>
            <button id='salvarBtn'> Salvar </button>
        </Link>
    </div>




    <Navbar/>
</div>
  )
}

export default AddAvaliacao