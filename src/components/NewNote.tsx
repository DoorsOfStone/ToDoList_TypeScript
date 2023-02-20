import React from 'react'
import '../App.css'
import { ITask } from '../Interface';
interface Props{
  task: ITask;
  deleteTask(taskNameToDelete: string ): void;
}

const NewNote =({task, deleteTask}:Props) =>  {
  return (
    <div className='task'>
        <p> {task.taskName}</p> 
      <button
        onClick={()=>{
          deleteTask(task.taskName)
        }}>X</button>
    
    
    </div>
  )
}

export default NewNote