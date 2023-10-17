import CartIcon from "./CartIcon";
import CartItems from "./CartItems";
import ItemDetailContainer from "./ItemDetailContainer";

//se actualizó el contenedor para que use CartItems y ahora ItemDetalContainer
const CartContainer = () => {
    return(
        <div className="bg-info rounded  p-3 position-relative">
         <CartIcon color="white"/> 
         <CartItems />
         <ItemDetailContainer />
      </div>
    );
};

export default CartContainer;