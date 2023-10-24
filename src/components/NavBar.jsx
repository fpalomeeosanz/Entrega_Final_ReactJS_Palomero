import Brand from "./Brand";
import MenuButton from "./MenuButton";
import CategoryItems from "./CategoryItems";
import { Link } from "react-router-dom";
//se incluye metodo Link para rutear el navBar

const NavBar = () => {
  return (
    <nav className="navbar fixed-bottom position relative">
      <div className="container-fluid justify-content-end">
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Brand />
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
