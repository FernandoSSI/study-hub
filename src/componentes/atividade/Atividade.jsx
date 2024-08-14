import React, { useState } from 'react'
import "./Atividade.css"
import { VscChevronDown, VscTrash  } from 'react-icons/vsc'

const Atividade = ({nome, descrição}) => {
    const [actv, setActv] = useState("actv")

    const handleActv = ()=>{
        if(actv == "actv"){
            setActv("expand")
        } else {
            setActv("actv")
        }
    }
  return (
    <div className={actv}
    >
        <p>{nome}</p>
        <VscChevronDown onClick={handleActv} style={{"cursor": 'pointer'}}/>
        <p className='actvDescription'>{descrição}</p>
        <span className='excluirActv' onClick={()=>{setActv("hidden")}} style={{"cursor": 'pointer'}}>
            <VscTrash/>
        </span>
    </div>
  )
}

export default Atividade