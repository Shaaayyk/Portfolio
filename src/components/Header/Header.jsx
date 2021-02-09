import { NavLink } from "react-router-dom";
import "./Header.css";
import puzzle from "../../images/jiggy.png"

export default function Header() {
  return (
    <div className="header">
      <div className="header-name">
        <img src={ puzzle }/>
      <NavLink to="" >
          Shay Kelley
      </NavLink>
      </div>
      <div className='nav-container'>
        <NavLink to="">About</NavLink>
        <NavLink to="">Projects</NavLink>
        <NavLink to="">Contact</NavLink>
        <NavLink to="">Resumé</NavLink>
      </div>
    </div>
  )
}
