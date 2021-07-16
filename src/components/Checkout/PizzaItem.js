function PizzaItem(props) {
    const pizza = props.pizza;
    
    return (
        <tr>
            <td>{pizza.id}</td>
            <td>{pizza.name}</td>
        </tr>
    )
}

export default PizzaItem;