import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';

interface Content {
  id: string,
  content: string,
  isCompleted: boolean
}
interface propsTasks {
  id: string,
  content: string,
  contentTasks: Content[],
  setContentTasks: Function,
}


export function Tasks({ id, content, contentTasks, setContentTasks }:propsTasks) {
  
  const deleteTask  = (id:string) => {
    const updatedTasks = contentTasks.filter((elem) => elem.id !== id);
    setContentTasks(updatedTasks);
  }

  const taskCompleted = (id:string) => {
    const taskCompleted = contentTasks.map((task) => {
      if(task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task
    });
    setContentTasks(taskCompleted);
  }

  return (
    <div className={style.tasks}>
      <input className={style.inputRadio} type="checkbox" id={id} name={id}/>
      <label htmlFor={id} onClick={() => taskCompleted(id)}>
        <div className={style.btnRadio}></div>
        <span>{content}</span>
      </label>
      <button className={style.trash} onClick={() => deleteTask(id)}>
        <Trash size={16}/>
      </button>
    </div>
  )
}
