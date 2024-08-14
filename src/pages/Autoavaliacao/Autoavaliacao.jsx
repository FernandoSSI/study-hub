import React from 'react'
import "./Autoavaliacao.css"
import Navbar from '../../componentes/Navbar/Navbar'
import Atividade from '../../componentes/atividade/Atividade'
import { Link } from 'react-router-dom'
import { VscAdd } from 'react-icons/vsc'

const Autoavaliacao = () => {
  return (
    <div className='atividadesContainer'>

            <div className='actvTitle'>
                <h3>Autoavaliação</h3>
                <span>
                    <Link to={"/addavaliacao"}>
                        <VscAdd />
                    </Link>

                </span>
            </div>

            <div className='actvsContainer'>
                <Atividade nome={"09/07/2024"} descrição={"Hoje consegui realizar a maioria das questões"} />
                <Atividade nome={"10/07/2024"} descrição={"Preciso estudar melhor POO!"} />
                <Atividade nome={"14/07/2024"} descrição={"Acertei 90% das questões"} />
                <Atividade nome={"01/08/2024"} descrição={"A prova de requisitos foi muito boa!"} />
            </div>


            <Navbar />
        </div>
  )
}

export default Autoavaliacao