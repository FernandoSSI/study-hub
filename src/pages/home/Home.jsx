import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import "./home.css"
import { VscAccount, VscChecklist, VscBell } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homeContainer'>

      <header className='homeHeader'>
        <div className='photoContainer'>
          <VscAccount />
        </div>
        <p>Olá Fernando, bons estudos!</p>
      </header>

      <div className='homeContents'>
        <Link to={"/atividades"}>
          <span className='activitiesHome'>
            <span className='iconsHome'>
              <VscChecklist />
            </span>

            <p>Atividades</p>
            <p className='notificationNumber'>4</p>
          </span>
        </Link>
        <Link to={"/avisos"}>
          <span className='avisos'>
            <span className='iconsHome'>
              <VscBell />
            </span>

            <p>Avisos</p>
            <p className='notificationNumber'>2</p>
          </span>
        </Link>

        <Link to={"/addquestoes"}>
          <span className='relatorioQuestoes'>
            <p>Adicionar Questões</p>
          </span>
        </Link>



      </div>

      <Navbar />
    </div>

  )
}

export default Home