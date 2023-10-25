import { useState } from 'react';
import CartItems from './CartItems';
import ItemDetailContainer from './ItemDetailContainer';
import CartIcon from './CartIcon';
import Brand from './Brand';
import ItemDetail from './ItemDetail';

function CartContainer() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item, count) => {
    // Verificar si el artículo ya está en el carrito
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);

    if (existingItem) {
      // Actualizar la cantidad si el artículo ya existe
      existingItem.count += count;
    } else {
      // Agregar el artículo al carrito si es nuevo
      const newItem = { item, count };
      setCart([...cart, newItem]);
    }

    // Actualizar el recuento total del carrito
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
