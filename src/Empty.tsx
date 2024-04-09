import { ClipboardText } from "@phosphor-icons/react";
import styles from './components/Empty.module.css'

export function Empty(){
    return(
        <div className={styles.empty}>
            <ClipboardText size={28} className={styles.clipboard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}