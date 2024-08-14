import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { VscHome } from "react-icons/vsc"
import { VscBell } from "react-icons/vsc"
import { VscCodeOss } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const [activeLink, setActiveLink] = useState(window.location.href);
    const location = useLocation();
    
    useEffect(() => {
        setActiveLink(window.location.href)
      }, [location.pathname]);

    return (
        <div className='navbarContainer'>
            <ul>

                <Link to={"/avisos"}>
                    <li className={activeLink === 'http://localhost:3000/avisos' || activeLink === 'http://localhost:3000/addavisos' ? 'gray' : ''} ><VscBell /></li>
                </Link>

                <Link to={"/planejamento"}>
                    <li className={activeLink === 'http://localhost:3000/planejamento' ? 'gray' : ''}><VscCodeOss /></li>
                </Link>

                <Link to={"/home"}>
                    <li className={activeLink === 'http://localhost:3000/home' ? 'gray' : ''}><VscHome /></li>
                </Link>

                <Link to={"/atividades"}>
                    <li className={activeLink === 'http://localhost:3000/atividades' || activeLink === 'http://localhost:3000/addatividades' ? 'gray' : ''}><VscBook /></li>
                </Link>

                <Link to={"/configs"}>
                    <li className={activeLink === 'http://localhost:3000/configs' ? 'gray' : ''}><VscGear /></li>
                </Link>






            </ul>
        </div>
    )
}

export default Navbar