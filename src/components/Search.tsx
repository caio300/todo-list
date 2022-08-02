import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import style from './Search.module.css';

interface Content {
  id: string,
  content: string,
  isCompleted: boolean
}
interface SearchProps {
  contentTasks: Content[],
  setContentTasks: Function,
}

export function Search({contentTasks, setContentTasks}: SearchProps) {
  const [content, setContent] = useState('');

  const handleClick = () => {
    const newId = contentTasks.length + 1;
    const objTask = {
      id: newId.toString(),
      content: content,
      isCompleted: false,
    }
    setContentTasks([...contentTasks, objTask]);
    setContent('');
  }

  return (
    <div className={style.search}>
      <input type="text" value={content} placeholder="Adicione um nova tarefa" onChange={(e) => setContent(e.target.value)}/>
      <button onClick={() => handleClick()}>
        Criar
        <PlusCircle color='#F2F2F2' weight='bold' size={16}/>
      </button>
    </div>
  )
}