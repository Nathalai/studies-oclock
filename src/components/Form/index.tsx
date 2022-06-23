import React, { useState } from "react";
import { ITarefa } from "../../types/tema";
import Botao from "../Button";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props) {
    const [tema, setTema] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tema, 
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]);
        setTema("");
        setTempo("00:00");        
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className= {style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa"
                    value={tema}
                    onChange={evento => setTema(evento.target.value)}
                    id="tarefa" 
                    placeholder="O que você vai estudar?" 
                    required 
                />
            </div>
            <div className= {style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time" 
                    step="1" 
                    name="tempo" 
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00"
                    placeholder="Por quanto tempo você vai estudar?"
                    required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>                   
        </form>
    )
}

//Class Components (não é mais muito utilizado, foi substituído pelo function components):
/* class Formulario1 extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tema: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ])
        this.setState({
            tema: "",
            tempo: "00:00"
        })
    }

    render () {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className= {style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text" 
                        name="tarefa"
                        value={this.state.tema}
                        onChange={evento => this.setState({...this.state, tema: evento.target.value})}
                        id="tarefa" 
                        placeholder="O que você vai estudar?" 
                        required 
                    />
                </div>
                <div className= {style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo" 
                        min="00:00:00" 
                        max="01:30:00"
                        placeholder="Por quanto tempo você vai estudar?"
                        required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>                   
            </form>
        )
    }
} */

export default Formulario;