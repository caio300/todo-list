import style from './Search.module.css'
import { PlusCircle } from 'phosphor-react'

export function Search() {
  return (
    <div className={style.search}>
      <input type="text" placeholder="Adicione um nova tarefa"/>
      <button>
        Criar
        <PlusCircle color='#F2F2F2' weight='bold' size={16}/>
      </button>
    </div>
  )
}