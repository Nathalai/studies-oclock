import style from "../Lista.module.scss";

export default function Item({ tema, tempo }: { tema: string, tempo: string }) {
    return (
        <li className={style.item}>
            <h3> {tema} </h3>
            <span> {tempo} </span>
        </li>
    )
    
}