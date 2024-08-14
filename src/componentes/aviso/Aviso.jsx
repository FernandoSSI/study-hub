import React, { useState } from 'react'
import "./Aviso.css"
import { VscChevronDown, VscTrash } from 'react-icons/vsc'

const Aviso = ({ nome, descrição }) => {
    const [actv, setActv] = useState("actv")



    return (
        <div className={actv}
        >
            <span>
                {nome}: {descrição}
            </span>

            <span className='excluirAviso' onClick={() => { setActv("hidden") }} style={{ "cursor": 'pointer' }}>
                <VscTrash />
            </span>
        </div>
    )
}

export default Aviso