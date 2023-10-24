import { Link } from "react-router-dom";
//se añadió el link a brand para ir al home

const Brand = () => {
  return (
    <div>
      <Link to={'/'}>
        <div>
          <img src="/src/img/LogoLaVozDeCaceresTexto.png" alt="Logo La Voz" style={{
          maxWidth: '30%',
          maxHeight: '30%',
          }} />
        </div>
      </Link>
    </div>
  );
};

export default Brand;

