import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCount from './ItemCount';

//se agrega metodoUseHitory y se agrega un pusheo para el carrito al finalizar la compra

const ItemDetail = ({ item }) => {
  const history = useHistory();
  const [showItemCount, setShowItemCount] = useState(true);
  const [selectedItemCount, setSelectedItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]); // Estado para almacenar los elementos del carrito

  const handleAddToCart = (count) => {
    setSelectedItemCount(count);
    setShowItemCount(false);
    setCartItems([...cartItems, item]);
  };

  const handleFinishPurchase = () => {
    
    history.push('/cart');
    console.log('Elementos en el carrito:', cartItems);
    
  };

  return (
    <div className="item-detail">
      {showItemCount ? (
        <ItemCount stock={item.stock} onAdd={handleAddToCart} />
      ) : (
        <div>
          <h3>Genial! Haz seleccionado {selectedItemCount} ítem(s).</h3>
          <p className="description">Descripcion del servicio: {item.text}</p>
          <button onClick={handleFinishPurchase}>Terminar mi compra</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
