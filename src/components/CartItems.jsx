//se acotó el codigo

const CartItems = ({ count = 0}) => {
    return (
        <div className="position-absolute bg-warning rounded-circle px-2"
            style={{top: 15, right: 15,}}>
            <span>{ count }</span> 
     </div>
    );
};

export default CartItems;