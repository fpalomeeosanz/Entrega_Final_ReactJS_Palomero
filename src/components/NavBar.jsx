import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItems from "./CategoryItems";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"

//se incluye metodo Link para rutear el navBar y se pasan estilos por prompt y se generan ruteos correctos 

const NavBar = () => {

  const containerStyle = {
    backgroundColor: 'rgba(155, 55, 255, 0.7)', 
    padding: '10px',
    borderRadius: '25px',
    boxShadow: '10px rgba(0, 0, 0, 0.7)', 
  };

  return (
    <nav className="navbar fixed-bottom position relative">
      <div className="container-fluid justify-content-end "style={containerStyle}>
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Brand /> 
            <Link to="/cart">
              <CartIcon />
            </Link>
            <li className="nav-item">
              <Link to="/category/ads">
                <CategoryItems isActive={false} name="Ads" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/voice">
                <CategoryItems isActive={false} name="Voice" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/coach">
                <CategoryItems isActive={false} name="Coach" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/web">
                <CategoryItems isActive={false} name="Web" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/contact"> 
                <CategoryItems isActive={true} name="Contact" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 