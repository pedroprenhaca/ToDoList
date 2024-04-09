import { Header } from "./components/Header";
import styles from './App.module.css';
import "./global.css";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { ChangeEvent, FormEvent, useState } from "react";
import { Empty } from "./Empty";

export interface Task {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [newtask, setNewTask] = useState<Task[]>([]);
  const [txtTask, setTxtTask] = useState('');

  const completedTasks = newtask.filter((task)=> task.isChecked).length

 
  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: Task = {
      id: newtask.length + 1,
      text: txtTask,
      isChecked: false
    };

    if (txtTask !== '') {
      setNewTask([...newtask, newTask]);
      setTxtTask('');
    } else {
      alert('Preencha o campo');
    }
  }

  function handletxtTask(event: ChangeEvent<HTMLInputElement>) {
    setTxtTask(event.target.value);
  }

  function handleDeleteTask(id: number) {
    const newTaskWithouDeletedOne = newtask.filter(task => {
      return task.id !== id;
    });
  
    setNewTask(newTaskWithouDeletedOne);
  }

  function toggleTaskCompletedById(taskId:number){
    const newTasks = newtask.map(task =>{
      if(task.id == taskId){
        return{
          ...task,
          isChecked: !task.isChecked,
        }
      }
      return task
    });
    setNewTask(newTasks);
    console.log(newTasks)
  }


  return (
    <div >
      <Header/>
      <div className={styles.container}>
        <Input 
        handleNewTask={handleNewTask} 
        handletxtTask={handletxtTask} 
        txtTask={txtTask} 
        taskCounter={newtask.length}
        completedTasks={completedTasks}
        
        
        />

        {newtask.length > 0 ? (
          newtask.map(task => (
            <List key={task.id}  
                  content={task.text} 
                  deleteTask={handleDeleteTask} 
                  data={task}
                  onCompleted={toggleTaskCompletedById}
            />
          ))
        ) : (
          <Empty/>
        )}
      </div>
    </div>
  );
}

export default App;
