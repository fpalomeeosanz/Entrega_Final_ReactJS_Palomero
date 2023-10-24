const MenuButton = () => {
  
  const buttonStyle = {
    margin: '10px'
  };

  return (
    <button
      className="navbar-toggler position-relative"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={buttonStyle}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default MenuButton;


