import { ITarefa } from "../../../types/tema";
import style from "./Item.module.scss";

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tema, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props) {    
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`} 
            onClick={() => !completado && selecionaTarefa(
                {
                tema, 
                tempo, 
                selecionado, 
                completado, 
                id
                }
            )}
        >
            <h3> {tema} </h3>
            <span> {tempo} </span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )    
}