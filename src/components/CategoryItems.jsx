
//se corrije el elemento y se cambian los links "a" para enrutar con metodo link correctamnete en Nabar

const CategoryItems = ({ isActive = false, name }) => {
  return (
    <div className={`nav-link ${isActive ? 'active' : ''}`}>{name}</div>
  );
};

export default CategoryItems;

