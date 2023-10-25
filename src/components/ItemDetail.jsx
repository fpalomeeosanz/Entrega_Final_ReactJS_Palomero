import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

//se agrega metodo "navigate" y se agrega un pusheo para el carrito al finalizar la compra pero aun sin funcionar

const ItemDetail = () => {

  const navigate = useNavigate();
  const [showItemCount, setShowItemCount] = useState(true);
  const [selectedItemCount, setSelectedItemCount] = useState(0);

  const handleAddToCart = (count) => {
    setSelectedItemCount(count);
    setShowItemCount(false);
    
  };

  const handleFinishPurchase = () => {
    navigate('/cart'); 
  };

  return (
    <div className="item-detail">
      {showItemCount ? (
        <ItemCount stock={1000} initial={1} onAdd={handleAddToCart} />
      ) : (
        <div>
          <h2>Genial! Haz seleccionado {selectedItemCount} ítem(s).</h2>
          <button className='buy-btn' onClick={handleFinishPurchase}>Terminar mi compra</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

