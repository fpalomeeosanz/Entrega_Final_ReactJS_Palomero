import { useState } from 'react';
import CartItems from './CartItems';
import ItemDetailContainer from './ItemDetailContainer';
import CartIcon from './CartIcon';
import Brand from './Brand';
import ItemDetail from './ItemDetail';


//cambios de logica filtrado para ver si existen elementos y dar una descripcion y numero de elemetos en el carrito

function CartContainer() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item, count) => {

    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      existingItem.count += count;
    } else {
      const newItem = { item, count };
      setCart([...cart, newItem]);
    }
    setCartCount(cartCount + count);
  };

  return (
    <div className="bg-info rounded p-3 position-relative">
      <Brand />
      <CartIcon />
      <CartItems cart={cart} />
      <p>Total del carrito: {cartCount}</p>
      <ItemDetailContainer addToCart={addToCart} />
      <ItemDetail  />
    </div>
  );
}

export default CartContainer;
