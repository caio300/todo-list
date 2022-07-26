import Logo from '../assets/Logo.svg'
import './Header.module.css';

export function Header() {
  return (
    <div>
      <img src={Logo} alt="Logo todo-list" />
    </div>
  )
}