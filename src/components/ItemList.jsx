import Item from './Item';
//se crea ItemList para mapear items

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
