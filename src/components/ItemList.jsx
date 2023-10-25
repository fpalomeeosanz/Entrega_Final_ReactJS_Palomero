import Item from './Item';
import { useState } from 'react';

//se crea ItemList para mapear items y slice para obtener solo los primeros 4 elementos

const ItemList = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(4);

  const showMoreItems = () => {
    setVisibleItems(visibleItems + 4);
  };

  return (
    <div className="item-list">
      {items.slice(0, visibleItems).map((item, index) => (
        <Item key={index} item={item} imageUrl={item.imageUrl} />
      ))}
      {visibleItems < items.length && (
        <button className='boton-ver-mas' onClick={showMoreItems}>Ver Más</button>
      )}
    </div>
  );
};

export default ItemList;

