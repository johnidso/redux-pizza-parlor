import PizzaItem from "./PizzaItem";

function CartPizzas(props) {
    const cart = props.cart;
    let price = 0;
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
            {cart.map(pizza => {{ price += pizza.price }})}
            <p>{price}</p>
        </div>
    )
}

export default CartPizzas;