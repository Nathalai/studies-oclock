import { ITarefa } from "../../../types/tema";
import style from "../Lista.module.scss";

export default function Item({ tema, tempo, selecionado, completado, id }: ITarefa) {
    console.log("item atual", {tema, tempo, selecionado, completado, id});
    return (
        <li className={style.item}>
            <h3> {tema} </h3>
            <span> {tempo} </span>
        </li>
    )
    
}