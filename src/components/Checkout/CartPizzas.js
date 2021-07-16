import PizzaItem from "./PizzaItem";


//This will get pizzas in he cart which should be stored in global state
function CartPizzas() {
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
                    <PizzaItem />
                </tbody>
            </table>
        </div>
        
    )
}

export default CartPizzas;