import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./Admin.css";
import Header from '../Header/Header';


function Admin({getOrders}) {
    useEffect(() => {
        getOrders();
      }, []);
    const pizzaOrders = useSelector(store => store.pizzaOrders);
    console.log(pizzaOrders);
    return(
        <>
        <table>
            <thead>
            <tr>
                <th>
                    Time Order was Placed
                </th>
                <th>
                    Customer Name
                </th>
                <th>
                    Street Address
                </th>
                <th>
                    City
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
                    {pizzaOrders.map(pizzaOrder =>{
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
                    })
                 }
                </tbody>

        </table> 
        </>  
    )}


export default Admin;