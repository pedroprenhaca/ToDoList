import { ChangeEvent, FormEvent } from 'react'
import styles from '../components/Input.module.css'


interface InputProps {
    handleNewTask: (event: FormEvent<HTMLFormElement>) => void;
    handletxtTask: (event: ChangeEvent<HTMLInputElement>) => void;
    txtTask:string
    taskCounter:number
    completedTasks:number
    
}

export function Input({handleNewTask,handletxtTask,txtTask,taskCounter,completedTasks}:InputProps){
    return(

        <div className={styles.wrapper} >
            <form onSubmit={handleNewTask} className={styles.form}>
                <div className={styles.text}>
                    <input type="text" placeholder='Adicione uma nova tarefa' value={txtTask} onChange={handletxtTask} />
                </div> 
                <div className={styles.create}>
                    <button name='newtask'>Criar</button>
                    
                </div>
            </form>

        <div className={styles.tasks}>

            <div className={styles.takscreated}>
                <p>Tarefas criadas</p>
                <span>{taskCounter}</span>
            </div>

            <div className={styles.tasksdone}>
                <p>Concluídas</p>
                <span>{completedTasks} de {taskCounter}</span>
            </div>
         </div>
        </div>
    )
}