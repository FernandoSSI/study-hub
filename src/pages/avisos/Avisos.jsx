import React, { act, useState } from 'react'
import "./Avisos.css"
import Navbar from '../../componentes/Navbar/Navbar'
import { VscAdd } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Aviso from '../../componentes/aviso/Aviso'

const Avisos = () => {
    const [actv, setActv] = useState('divprovisoria')


    return (
        <div className='atividadesContainer'>

            <div className='actvTitle'>
                <h3>Avisos</h3>
                <Link to={"/addavisos"}>
                    <VscAdd />
                </Link>
            </div>

            <div className="actvsContainer">
                <div className={actv}>
                    <Aviso nome={"Aula 1"} descrição={"Vai ser no auditório"} />
                    <Aviso nome={"Prova de requisitos"} descrição={"dia 09/08"} />
                </div>
            </div>


            <button class="limparTudo" onClick={() => setActv("hidden")}>Limpar tudo</button>
            <Navbar />
        </div>
    )
}

export default Avisos