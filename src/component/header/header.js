import Logo from "../svg/logo"
import React from "react"

export default function Header(){
  const [menu, setMenu] = React.useState(false)
  function toggleMenu(){
    setMenu(prevstate => !prevstate)
  }
  return(
    <header className="header">
      <nav className="header_nav">
        <div className={`navbar_toggle ${menu ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="header_nav_logoDiv">
          <Logo />
        </div>
        <div className={`header_nav_listDiv ${menu ? 'is_active' : ''} `}>
          <ul className="lists">
            <li className="item">home</li>
            <li className="item">shop</li>
            <li className="item">about</li>
            <li className="item">contact</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}