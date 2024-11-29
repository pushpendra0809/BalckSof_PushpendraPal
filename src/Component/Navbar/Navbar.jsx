import React,{useState} from 'react'
import style from "../Navbar/Navbar.module.css"
import Logo from "../Media/Logo_2.png"
import { Link } from 'react-router-dom';
import imagetoggel from "../Media/web.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false); 
  };

  return (
    <>
      <nav className={style.container}> 
        <div className={style.container1}>
        <div className={style.container2}>
         <Link  className={style.logoimg} to="/"><img src={Logo} alt=''/></Link>
          <div className={style.toggelbutton}><button onClick={toggleMenu}><img src={imagetoggel} alt="" /></button></div>
        </div>
        <div className={`${style.container3} ${menuOpen ? style.active : ''}`}>
          <div className={style.toggelheading}>
          <div className={style.toggelname}><h1>Smart Light</h1></div>
          <div className={style.closebutton}><button onClick={closeMenu}>X</button></div>
          </div>
        <ul className={style.ulContainer}>
             
            <li className={style.iteam1}>
              <Link className={style.Productname1} to='/home'>Home</Link>
            </li>
            <li className={style.iteam1}>
              <Link className={style.Productname1} to='/'>Products</Link>
            </li>
            <li className={style.iteam1}>
              <Link className={style.Productname1} to='/'>SoftwareServces</Link>
            </li>
             <li className={style.iteam1}>
                <div >
                  <button>Log In</button>
                </div>
            </li> 
          </ul>
        </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar

