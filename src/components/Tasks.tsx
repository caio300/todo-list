import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';


export function Tasks() {
  return (
    <div className={style.tasks}>
      <input className={style.inputRadio} type="checkbox" id='1' name='1'/>
      <label htmlFor='1'>
        <div className={style.btnRadio}></div>
        <span>Integer urna interdum massa libero auctor neque turpis turpis sempe Integer urna interdum</span>
      </label>
      <div className={style.trash}>
        <Trash size={16}/>
      </div>
    </div>
  )
}


{/* <select className={style.tasks}>
      <input type="radio" name='1'/>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <div>
        <Trash size={16}/>
      </div>
    </select> */}