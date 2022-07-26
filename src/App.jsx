import { Header } from './components/Header';
import { Search } from './components/Search';
import { InsistentTasks } from './components/InsistentTasks';

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
        <InsistentTasks />
      </div>
    </div>
  )
}

export default App
