import React from 'react';
import { useCart } from './CartContext';

const DishesList = () => {
    const { dishes, addToCart } = useCart();

    return (
        <div>
            <h2>Dishes</h2>
            <ul>
                {dishes.map(dish => (
                    <li key={dish.id}>
                        <div>
                            <img src={dish.image} alt={dish.name} />
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <p>Price: ${dish.price}</p>
                            <button onClick={() => addToCart(dish)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DishesList;