import PizzaItem from "./PizzaItem";

function CartPizzas(props) {
    const cart = props.cart;
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