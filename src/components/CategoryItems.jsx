import { Link } from "react-router-dom";
//se agrega link en reemplazo de a se mantine to #

const CategoryItems = ({ isActive = false, name }) => {
  return (
    <Link className={`nav-link ${isActive ? 'active' : ''}`} aria-current="page" to={"#"}>{name}</Link>
  );
};



export default CategoryItems;
