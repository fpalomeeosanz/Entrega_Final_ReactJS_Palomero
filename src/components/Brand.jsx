import { Link } from "react-router-dom";
//se añadió el link a brand para ir al home

const Brand = () => {
    return(
        <div>
            <Link className="navbar-brand" to={'/'} >La tiendita de Cáceres</Link>
        </div>
    );
};

export default Brand;