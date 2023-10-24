import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

const Item = ({ item, imageUrl }) => {
  const handleAddToCart = (count) => {
    console.log(`Agregados ${count} elementos al carrito`);
  };

  return (
    <div className="item">
      {imageUrl && imageUrl.trim() !== '' ? (<img src={imageUrl} alt={item.name} width={500} height={250} />
      ) : (
        <div>Esta imagen es de otra web y parece que no está :/ </div> 
      )}
      <h2>{item.name}</h2>
      <p className="price">Precio: ${item.price}</p>
      <ItemCount stock={100} onAdd={handleAddToCart} />
      <Link className='ver-detalles' to={`/item/${item.id}`}>Ver detalles</Link> 
    </div>
  );
};

export default Item
