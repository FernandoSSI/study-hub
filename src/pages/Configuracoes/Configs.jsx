import React from 'react'
import "./Configs.css"
import Navbar from '../../componentes/Navbar/Navbar'

const Configs = () => {
  return (
    <div className='atividadesContainer'>
          <div className='actvTitle'>
                <h3>Configurações</h3>
            </div>

            <div className='configBtnContainer'>
                <button>Geral</button>
                <button>Notificações</button>
                <button>segurança</button>
                <button>feedback</button>
                <button>Configurações adicionais</button>
                <button>Permições</button>
                <button>Sobre o aplicativo</button>


            </div>
        <Navbar/>
    </div>
  )
}

export default Configs