import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';


export function Tasks({ id }) {
  return (
    <div className={style.tasks}>
      <input className={style.inputRadio} type="radio" id={id} name={id}/>
      <label htmlFor={id}>
        <div className={style.btnRadio}></div>
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
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