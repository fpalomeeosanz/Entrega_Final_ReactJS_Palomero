import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

//se crea el "item" y se importa

const Item = ({ item, imageUrl }) => {
  return (
    <div className="item">
      <img src={imageUrl} alt={item.name} width={500} height={250} />
      <h2>{item.name}</h2>
      <p className="price">Precio: ${item.price}</p>
      <ItemCount />
      <Link to={`/item/${item.id}`}>Ver detalles</Link>
      <p className="description">Descripcion del servicio: {item.text}</p>
    </div>
  );
};

export default Item;

