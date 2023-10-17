//se crea el "item" y se importa 

const Item = ({ item, imageUrl }) => {  
  return (
    <div className="item">
      <img src={imageUrl} alt={item.name} width={500} height={250} />
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Descripcion del servicio: {item.text}</p>
    </div>
  );
};

export default Item;
