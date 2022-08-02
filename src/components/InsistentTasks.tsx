import style from './InsistentTasks.module.css';

import ClipBoard from '../assets/Clipboard.svg';

export function InsistentTasks() {
  return (
    <div className={style.insistentTasks}>
      <img src={ClipBoard}/>
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}