import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(

    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        {['home', 'about', 'menu', 'awards', 'contact'].map((item) => (
          <li className="p__opensans flex__center" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log in / Register</a>
        <div />

        <a href="/" className="p__opensans">Book a Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" className="cursor" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27}  className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
            {['home', 'about', 'menu', 'awards','contact'].map((item) =>(
              < li key={item}>
                <a href={`#${item}`} onClick={() => setToggleMenu(false)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
