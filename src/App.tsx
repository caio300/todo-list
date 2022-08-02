import { Header } from './components/Header';
import { Search } from './components/Search';
import { InsistentTasks } from './components/InsistentTasks';
import { Tasks } from './components/Tasks';

import style from './App.module.css';
import '../global.css';
import { useState } from 'react';

function App() {
  const [contentTasks, setContentTesks ] = useState();
  
  return (
    <div>
      <Header />
      
      <div className={style.wrapper}>
        <Search />

        <div className={style.infoTasks}>
          <p className={style.createdTasks}>Tarefas criadas <span>0</span></p>
          <p className={style.doneTasks}>Concluídas <span>0</span></p>
        </div>
         {/* <InsistentTasks /> */}
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </div>
  )
}

export default App
