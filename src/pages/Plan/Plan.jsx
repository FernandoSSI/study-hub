import React from 'react'
import "./Plan.css"
import Navbar from '../../componentes/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Plan = () => {
    return (
        <div className='atividadesContainer'>
            <div className='actvTitle'>
                <h3>Planejamento</h3>
            </div>

            <div className='planBtnContainer'>

                <Link to={"/desempenho"}><button>Desempenho</button></Link>
                <button>Revisão</button>
                <Link to={"/autoavaliacao"}><button>Autoavaliação</button></Link>
                <Link to={"/materia"}><button>Matérias</button></Link>
                <Link to={"/addquestoes"}><button>Adicionar Questões</button></Link>

            </div>

            <Navbar/>
        </div>
    )
}

export default Plan