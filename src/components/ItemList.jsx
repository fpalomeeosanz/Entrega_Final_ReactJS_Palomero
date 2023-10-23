import Item from './Item';
//se crea ItemList para mapear items y slice para obtener solo los primeros 4 elementos


const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item key={index} item={item} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default ItemList;

