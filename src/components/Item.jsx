import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

const Item = ({ item, imageUrl }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (count) => {
    // Crear una copia de los elementos en el carrito
    const updatedCartItems = [...cartItems];

    // Agregar el elemento actual al carrito con la cantidad seleccionada
    updatedCartItems.push({ ...item, quantity: count });

    // Actualizar el estado del carrito
    setCartItems(updatedCartItems);

    console.log(`${count} elementos de "${item.name}" se han agregado al carrito.`);
  };

  return (
    <div className="item">
      {imageUrl && imageUrl.trim() !== '' ? (
        <img src={imageUrl} alt={item.name} width={500} height={250} />
      ) : (
        <div>La imagen nada, la voz es todo.</div>
      )}
      <h2>{item.name}</h2>
      <p className="price">Precio: ${item.price}</p>
      <ItemCount stock={100} onAdd={(count) => handleAddToCart(count)} />
      <Link className='ver-detalles' to={`/item/${item.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
