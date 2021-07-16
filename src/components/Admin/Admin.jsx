function Admin() {

    return(
        <table>
            <thead>
            <tr>
                <th>
                    Customer Name
                </th>
                <th>
                    Time Order was Placed
                </th>
                <th>
                    Type
                </th>
                <th>
                    Total Cost
                </th>
                </tr>
                </thead>
                <tbody>
                    {orderList.map((pizzaOrder =>{
                        return (
                            <tr key={pizzaOrder.Id}>
                                <td> {pizzaOrder.time }</td>
                                <td> {pizzaOrder.customer_name}</td>
                                <td> {pizzaOrder.street_address}</td>
                                <td> {pizzaOrder.city}</td>
                                <td> {pizzaOrder.type}</td>
                                <td> {pizzaOrder.total}</td>
                            </tr>
                        )
                    })}
                </tbody>
        </table>
    )
}


export default Admin;