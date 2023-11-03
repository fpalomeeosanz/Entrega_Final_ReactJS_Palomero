import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';


function ItemDetail({ item }) {
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
        <div>
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <img src={item.imageUrl} alt={item.title} />
          <ItemCount stock={1000} initial={1} onAdd={handleAddToCart} />
        </div>
      ) : (
        <div>
          <h2>¡Genial! Has seleccionado {selectedItemCount} ítem(s).</h2>
          <button className="buy-btn" onClick={handleFinishPurchase}>
            Finalizar la compra
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;



