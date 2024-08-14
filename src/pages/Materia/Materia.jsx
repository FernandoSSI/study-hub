import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Atividade from '../../componentes/atividade/Atividade'
import { VscAdd } from 'react-icons/vsc'

const Materia = () => {
  return (
    <div className='atividadesContainer'>

            <div className='actvTitle'>
                <h3>Matérias</h3>
                <span>
                    <Link to={"/addmateria"}>
                        <VscAdd />
                    </Link>

                </span>
            </div>

            <div className='actvsContainer'>
                <Atividade nome={"Grafos"} descrição={"Professor Pablo"} />
                <Atividade nome={"Requisitos"} descrição={"Professora patrícia"} />
                <Atividade nome={"Cálculo"} descrição={"Professor Anderson"} />
                <Atividade nome={"POO"} descrição={"Professor Marcos"} />
                <Atividade nome={"Estatística"} descrição={"Professora Nilde"} />

            </div>


            <Navbar />
        </div>
  )
}

export default Materia