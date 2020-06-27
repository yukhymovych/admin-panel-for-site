import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
   const store = useSelector(store => store);

   const [menuOpen, setMenuOpen] = useState("");

   const menuSwitcher = () => {
      if (menuOpen === "") {
         setMenuOpen("active");
      }
      else{
         setMenuOpen("");
      }
   }

   return (
      <header>
         <div className="wrapper">
            <Link className="link header__logo" to="/">{store.additionalInfo.headerLogoText}</Link>
            <nav className={menuOpen}>
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
               </ul>
            </nav>
            <img className="header__menu-btn" src="img/menu.svg" alt="" onClick={menuSwitcher} />
         </div>
      </header>
   );
}

export default Header;