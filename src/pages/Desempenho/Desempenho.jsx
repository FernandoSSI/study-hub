import React, { useState } from 'react';
import './Desempenho.css';
import Navbar from '../../componentes/Navbar/Navbar';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import CustomLegend from '../../componentes/CustomLegend';

// Dados de exemplo
const dataHoje = [
    { name: 'Grafos', value: 5 },
    { name: 'Requisitos', value: 2 },
    { name: 'Cálculo', value: 1 },
    { name: 'POO', value: 0 },
    { name: 'Estatística', value: 0 },
];

const dataSemana = [
    { name: 'Grafos', value: 10 },
    { name: 'Requisitos', value: 8 },
    { name: 'Cálculo', value: 5 },
    { name: 'POO', value: 3 },
    { name: 'Estatística', value: 2 },
];

const dataMes = [
    { name: 'Grafos', value: 20 },
    { name: 'Requisitos', value: 15 },
    { name: 'Cálculo', value: 10 },
    { name: 'POO', value: 5 },
    { name: 'Estatística', value: 8 },
];

const COLORS = ['#010221', '#0A7373', '#EDAA25', '#C43302', '#FF6347'];

const Desempenho = () => {
    const [selectedTime, setSelectedTime] = useState('hoje');
    const [data, setData] = useState(dataHoje);
    const [totalQuestoes, setTotalQuestoes] = useState(dataHoje.reduce((acc, curr) => acc + curr.value, 0));
    const [totalAcertos, setTotalAcertos] = useState(7);

    const handleClick = (time) => {
        setSelectedTime(time);
        let selectedData;
        let acertos;
        switch (time) {
            case 'hoje':
                selectedData = dataHoje;
                acertos = 7;
                break;
            case 'semana':
                selectedData = dataSemana;
                acertos = 19;
                break;
            case 'mes':
                selectedData = dataMes;
                acertos = 45;
                break;
            default:
                selectedData = dataHoje;
                acertos = 7;
        }
        setData(selectedData);
        setTotalQuestoes(selectedData.reduce((acc, curr) => acc + curr.value, 0));
        setTotalAcertos(acertos);
    };

    return (
        <div className='atividadesContainer'>
            <div className='actvTitle'>
                <h3>Desempenho</h3>
            </div>

            <span className='dateSpan'>
                <span
                    style={{ backgroundColor: selectedTime === 'hoje' ? '#ffffff' : '#dfdfdf' }}
                    onClick={() => handleClick('hoje')}
                >
                    Hoje
                </span>
                <span
                    style={{ backgroundColor: selectedTime === 'semana' ? '#ffffff' : '#dfdfdf' }}
                    onClick={() => handleClick('semana')}
                >
                    Semana
                </span>
                <span
                    style={{ backgroundColor: selectedTime === 'mes' ? '#ffffff' : '#dfdfdf' }}
                    onClick={() => handleClick('mes')}
                >
                    Mês
                </span>
            </span>
            <div className='graphContainer'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={true}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <CustomLegend payload={data.map((entry, index) => ({ value: entry.name, color: COLORS[index % COLORS.length] }))} />
            </div>

            <div className='containerTotalQst'>
                <div className='totalqst'>
                    <p>Total de Questões</p>
                    <h2>{totalQuestoes}</h2>
                </div>

                <div className='totalaAcertos'>
                    <p>Total de Acertos</p>
                    <h2>{totalAcertos}</h2>
                </div>
            </div>

            <Navbar />
        </div>
    )
}

export default Desempenho;
