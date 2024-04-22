import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <div>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total items: {cart.length}</p>
            <p>Total value: ${cart.reduce((total, item) => total + parseFloat(item.price), 0)}</p>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;