import { Header } from './components/Header';
import { Search } from './components/Search';

import style from './App.module.css';
import '../global.css';

function App() {
  

  return (
    <div>
      <Header />
      
      <div className={style.wrapper}>
        <Search />
      </div>
    </div>
  )
}

export default App
