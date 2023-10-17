import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItems from "./CategoryItems";
import CartContainer from "./CartContainer";
import { Link } from "react-router-dom";
//se incluye metodo Link para rutear el navBar

const NavBar = () => {
    return(
    <nav className="navbar fixed-bottom" style={{ backgroundColor: 'rgba(233, 244, 9 , 0.3)', color: 'white', padding: '10px', marginTop: '10px' }} >
     <div className="container-fluid">
       <Brand />
       <MenuButton />
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
         <CategoryItems isActive = {false} name="Ads" /> <Link to ={'/ads'}></Link>
         </li>
         <li className="nav-item">
         <CategoryItems isActive = {false} name="Voice"/> <Link to ={'/voices'}></Link>
         </li>
         <li className="nav-item">
         <CategoryItems isActive = {false} name="Coach"/> <Link to ={'/coaching'}></Link>
         </li>
         <li className="nav-item">
         <CategoryItems isActive = {false} name="Web"/> <Link to ={'/webs'}></Link>
         </li>
         <li className="nav-item">
         <CategoryItems isActive = {true} name="Contact"/> <Link to ={'/contact'}></Link>
         </li>
       </ul>
       <CartContainer />
     </div>
    </div>
  </nav>
    );
};

export default NavBar;