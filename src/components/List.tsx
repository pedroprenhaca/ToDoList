import styles from './List.module.css' 
import { Trash } from '@phosphor-icons/react'
import {Task} from '../App'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface ListProps {
    content:string
    deleteTask : (id:number) => void
    data:Task
    onCompleted: (taskId:number) =>void
}

export function List({content,deleteTask,data,onCompleted}:ListProps){

    function handleRemove() {
        deleteTask(data.id)
      }

      function handleToggleCompleted() {
        onCompleted(data.id); 
    }

    return(
       <div>
            <main className={styles.main}>
                <button onClick={handleToggleCompleted} className={styles.check} >
                    {data.isChecked ? <BsFillCheckCircleFill/>:''}
                </button>
                <p className={data.isChecked ? styles.textChecked : ""}>{content}</p>
                <button onClick={handleRemove}><Trash size={19}/></button>
            </main>
       </div>
    )
}
