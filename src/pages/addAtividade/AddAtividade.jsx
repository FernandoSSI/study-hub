import React from 'react'
import "./AddAtividade.css"
import Navbar from '../../componentes/Navbar/Navbar'
import { Link } from 'react-router-dom'

const AddAtividade = () => {
    return (
        <div className='atividadesContainer'>

            <div className='actvTitle'>
                <h3>Registrar atividade</h3>
            </div>

            <div className='formAddAtv'>
                <input type="text" name="" id="" placeholder='Nome' />
                <select name="" id="">
                    <option value="" disabled selected hidden>Matéria/Cadeira</option>
                    <option value="">grafos</option>
                    <option value="">Requisitos</option>
                    <option value="">Linguagens de programação</option>
                    <option value="">POO</option>
                    <option value="">Probabilidade</option>
                </select>
                <input type="text" name="" id="" placeholder='Conteúdo' />
                <select name="" id="">
                    <option value="" disabled selected hidden> Duração</option>
                    <option value="">1 semana</option>
                    <option value="">1 mes</option>
                    <option value="">2 mes</option>
                    <option value="">1 semestre</option>

                </select>
            </div>

            <div className='addAtvBtns'>

                <Link to={"/atividades"}>
                    <button id='cancelarBtn'> Cancelar</button>
                </Link>
                <Link to={"/atividades"}>
                    <button id='salvarBtn'> Salvar </button>
                </Link>
            </div>



            <Navbar />
        </div>
    )
}

export default AddAtividade