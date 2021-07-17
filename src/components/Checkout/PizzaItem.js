function PizzaItem(props) {
    const pizza = props.pizza;
    
    return (
        <tr>
            <td>{pizza.name}</td>
            <td>{pizza.price}</td>
        </tr>
    )
}

export default PizzaItem;