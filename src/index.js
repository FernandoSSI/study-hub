import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Atividades from './pages/atividades/Atividades';
import AddAtividade from './pages/addAtividade/AddAtividade';
import Avisos from './pages/avisos/Avisos';
import AddAviso from './pages/addAviso/AddAviso';
import Plan from './pages/Plan/Plan';
import Configs from './pages/Configuracoes/Configs';
import Desempenho from './pages/Desempenho/Desempenho';
import AddMateria from './pages/AddMateria/AddMateria';
import AddQuestoes from './pages/AddQuestoes/AddQuestoes';
import Materia from './pages/Materia/Materia';
import Autoavaliacao from './pages/Autoavaliacao/Autoavaliacao';
import AddAvaliacao from './pages/AddAvaliacao/AddAvaliacao';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/atividades",
        element: <Atividades/>
      },
      {
        path: "/addatividades",
        element: <AddAtividade/>
      },
      {
        path: "/avisos",
        element: <Avisos/>
      },
      {
        path: "/addavisos",
        element: <AddAviso/>
      },
      {
        path: "/planejamento",
        element: <Plan/>
      },
      {
        path: "/configs",
        element: <Configs/>
      },
      {
        path: "/desempenho",
        element: <Desempenho/>
      },
      {
        path: "/materia",
        element: <Materia/>
      },
      {
        path: "/addmateria",
        element: <AddMateria/>
      },
      {
        path: "/addquestoes",
        element: <AddQuestoes/>
      },
      {
        path: "/autoavaliacao",
        element: <Autoavaliacao/>
      },
      {
        path: "/addavaliacao",
        element: <AddAvaliacao/>
      },

      
      
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

