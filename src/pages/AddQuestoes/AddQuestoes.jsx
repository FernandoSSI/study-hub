import React from 'react'
import "./AddQuestoes"
import Navbar from '../../componentes/Navbar/Navbar'
import { Link } from 'react-router-dom'

const AddQuestoes = () => {
  return (
    <div className='atividadesContainer'>
            <div className='actvTitle'>
                <h3>Adicionar Questões</h3>
            </div>

            <div className='formAddAtv'>
                <input type="number" name="" id="" placeholder='Questões feitas' />
                <input type="number" name="" id="" placeholder='Questões corretas' />

                <select name="" id="">
                    <option value="" disabled selected hidden>Matéria/Cadeira</option>
                    <option value="">Grafos</option>
                    <option value="">Requisitos</option>
                    <option value="">Cálculo</option>
                    <option value="">POO</option>
                    <option value="">Estatística</option>
                </select>
            
            </div>

            <div className='addAtvBtns'>

                <Link to={""}>
                    <button id='cancelarBtn'> Cancelar</button>
                </Link>
                <Link to={""}>
                    <button id='salvarBtn'> Salvar </button>
                </Link>
            </div>




            <Navbar/>
        </div>
  )
}

export default AddQuestoes