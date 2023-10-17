import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCount from './ItemCount';
//se agrega metodoUseHitory y se agrega un pusheo para el carrito al finalizar la compra

const ItemDetail = ({ item }) => {

  const history = useHistory();
  const [showItemCount, setShowItemCount] = useState(true);
  const [selectedItemCount, setSelectedItemCount] = useState(0);

  const handleAddToCart = (count) => {
    setSelectedItemCount(count);
    setShowItemCount(false);
    
  };

  const handleFinishPurchase = () => {
    history.push('/cart'); 
  };

  return (
    <div className="item-detail">
      {showItemCount ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
      ) : (
        <div>
          <h2>Genial! Haz seleccionado {selectedItemCount} ítem(s).</h2>
          <button onClick={handleFinishPurchase}>Terminar mi compra</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

