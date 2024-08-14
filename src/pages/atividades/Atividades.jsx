import React from 'react'
import "./Atividades.css"
import Navbar from '../../componentes/Navbar/Navbar'
import { VscAdd } from 'react-icons/vsc'
import Atividade from '../../componentes/atividade/Atividade'
import { Link } from 'react-router-dom'


const Atividades = () => {

    return (
        <div className='atividadesContainer'>

            <div className='actvTitle'>
                <h3>Atividades</h3>
                <span>
                    <Link to={"/addatividades"}>
                        <VscAdd />
                    </Link>

                </span>
            </div>

            <div className='actvsContainer'>
                <Atividade nome={"Atividade de grafos"} descrição={"Fazer tarefa de grafos para dia 18/08"} />
                <Atividade nome={"Atividade de Requisitos"} descrição={"Fazer tarefa de requisitos para dia 07/08"} />
                <Atividade nome={"Resumo de POO"} descrição={"Resumo do tópico 9 de POO"} />
                <Atividade nome={"Fazer trabalho de LP"} descrição={"Seminário para Quarta-feira"} />
            </div>


            <Navbar />
        </div>
    )
}

export default Atividades