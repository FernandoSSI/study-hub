import React from 'react'
import "./AddMateria"
import Navbar from '../../componentes/Navbar/Navbar'
import { Link } from 'react-router-dom'

const AddMateria = () => {
    return (
        <div className='atividadesContainer'>
            <div className='actvTitle'>
                <h3>Adicionar matérias</h3>
            </div>

            <div className='formAddAtv'>
                <input type="text" name="" id="" placeholder='Nome'/>
                <input type="text" name="" id="" placeholder='Descrição' />
               
            </div>

            <div className='addAtvBtns'>

                <Link to={"/materia"}>
                    <button id='cancelarBtn'> Cancelar</button>
                </Link>
                <Link to={"/materia"}>
                    <button id='salvarBtn'> Salvar </button>
                </Link>
            </div>


            <Navbar/>
        </div>
    )
}

export default AddMateria