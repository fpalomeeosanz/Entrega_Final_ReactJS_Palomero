import { Link } from 'react-router-dom';

//se modificoó para importr link

const CategoryItems = ({ isActive = false, name }) => {
  return (
    <Link to={`/category/${name}`} className={`nav-link ${isActive ? 'active' : ''}`}>
      {name}
    </Link>
  );
};

export default CategoryItems;