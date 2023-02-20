import './App.css';
import NewNote from './components/NewNote';
import React,{FC, ChangeEvent,useState} from 'react';
import { ITask } from './Interface';


const  App: FC =() => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodoList] = useState<ITask[]>([]);
 const handleChange = (event:ChangeEvent<HTMLInputElement> ): void =>{
   setTask(event.target.value);
  
   
 }
 const addTask = (): void=>{
  const newTask = {taskName: task}
    setTodoList([...todo, newTask]);
    setTask("");
    console.log(todo)
 }
 const deleteTask = (taskNameToDelete: string ): void =>{
       setTodoList(todo.filter((task)=>{
             return task.taskName !== taskNameToDelete
       }))
 }
    return (
    <div className="App">
     <div className='input__container'>
      <div className='input__box'>
      <input
      value={task}
      onChange={handleChange} type="text" placeholder='add a task'/>
       <div className="button__container">
      <button onClick={addTask}>Enter</button>
      </div>
      </div>
      </div>
      <div className="note__container">
           {todo.map((task:ITask, key: number )=>{
            return <NewNote key={key} task={task} deleteTask={deleteTask}/>
           })}

      </div>
    </div>
  );
}

export default App;


