import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

//se agrega la función handleAddToCart y se consologuean los elementos 

const Item = ({ item, imageUrl }) => {
  
  const handleAddToCart = (count) => {
    
    console.log(`Agregados ${count} elementos al carrito`);
  };

  return (
    <div className="item">
      <img src={imageUrl} alt={item.name} width={500} height={250} />
      <h2>{item.name}</h2>
      <p className="price">Precio: ${item.price}</p>
      <ItemCount stock={100} onAdd={handleAddToCart} />
      <Link className='ver-detalles' to={`/item/${item.id}`}>Ver detalles</Link> 
    </div>
  );
};

export default Item;


