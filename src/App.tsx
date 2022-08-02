import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { InsistentTasks } from './components/InsistentTasks';
import { Tasks } from './components/Tasks';

import style from './App.module.css';
import '../global.css';

interface Content {
  id: string,
  content: string,
  isCompleted: boolean
}

function App() {
  const [contentTasks, setContentTasks ] = useState<Content[]>([]);
  
  useEffect(() => {}, [contentTasks]);

  const qtdTasksCompleted = contentTasks.filter(tasks => tasks.isCompleted === true);

  return (
    <div>
      <Header />
      
      <div className={style.wrapper}>
        <Search contentTasks={contentTasks} setContentTasks={setContentTasks}/>

        {contentTasks.length === 0 ?
        <div className={style.infoTasks}>
          <p className={style.createdTasks}>Tarefas criadas <span>{contentTasks.length}</span></p>
          <p className={style.doneTasks}>Concluídas <span>0</span></p>
        </div> :
        <div className={style.infoTasks}>
          <p className={style.createdTasks}>Tarefas criadas <span>{contentTasks.length}</span></p>
          <p className={style.doneTasks}>Concluídas<span>{contentTasks.filter(tasks => tasks.isCompleted === true).length}</span>de<span>{contentTasks.length}</span></p>
        </div>}
         {contentTasks.length === 0 ? <InsistentTasks /> :
         contentTasks.map(({id, content}) => {
          return (
            <Tasks
              key={id}
              id={id}
              content={content}
              contentTasks={contentTasks}
              setContentTasks={setContentTasks}
            />
          )
         })}
      </div>
    </div>
  )
}

export default App
