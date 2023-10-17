const MenuButton  = () => {
    return(
        <button className="navbar-toggler position-relative" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation" style={{marginTop: 10}}
        >
        <span className="navbar-toggler-icon "></span>
      </button>
    );
};

export default MenuButton;

