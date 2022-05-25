import React from "react";
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tema: "React",
        tempo: "02:00:00"
    }, {
        tema: "Javascript",
        tempo: "01:00:00"
    }, {
        tema: "Typescript",
        tempo: "00:30:00"
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3> {item.tema} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}                
            </ul>
        </aside>
    )
}

export default Lista;