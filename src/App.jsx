import { Header } from './components/Header';
import { Search } from './components/Search';
import { InsistentTasks } from './components/InsistentTasks';
import { Tasks } from './components/Tasks';

import style from './App.module.css';
import '../global.css';

function App() {
  
  return (
    <div>
      <Header />
      
      <div className={style.wrapper}>
        <Search />

        <div className={style.infoTasks}>
          <p className={style.createdTasks}>Tarefaz criadas <span>0</span></p>
          <p className={style.doneTasks}>Concluídas <span>0</span></p>
        </div>
         {/* <InsistentTasks /> */}
        <Tasks id={1}/>
        <Tasks id={2}/>
        <Tasks id={3}/>
        <Tasks id={4}/>
        <Tasks id={5}/>
        <Tasks id={6}/>
      </div>
    </div>
  )
}

export default App
