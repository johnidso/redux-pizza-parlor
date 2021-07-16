import PizzaItem from "./PizzaItem";

import { useSelector } from 'react-redux';

function CartPizzas() {

    const cart = useSelector(store => store.PizzaCartReducer);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(pizza => (
                        <PizzaItem pizza={pizza} key = {pizza.id}/>
                    ))}
                    
                </tbody>
            </table>
        </div>
        
    )
}

export default CartPizzas;