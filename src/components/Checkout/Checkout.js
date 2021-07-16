import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Components
import ClientData from './ClientData.js'
import CartPizzas from './CartPizzas.js';

function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch();

    //When the checkout button is clicked it will prepare an object to send it to the server
    //and then save it on the database
    const handleClick = () => {
        //This gets the pizzas Id's only and save them in a object along with 
        // the quantity which is set to 1 as a placeholder. it will also get the total price of the order
        let pizzas = [];
        let total = 0;
        for (const pizza of cart) {
            pizzas.push({
                id: pizza.id,
                quantity: "1"
            });
            total += pizza.price;
        }
        //New object with the new data
        let order = {...customerInfo, pizzas: pizzas, total: total}
        uploadOrder(order);
    }

    // POST route that uploads new order
  const uploadOrder = (newOrder) => {
    axios.post(`/api/order`, newOrder).then(response => {
        dispatch({
            type: 'CLEAR_CART',
            payload: []
        })
        dispatch({
            type: 'CLEAR_CLIENT_DATA',
            payload = {}
        })
        history.push('/');
    }).catch(error => {
      console.log('Error placing order', error);
    })
  }
    //Reducers
    const customerInfo = useSelector(store => store.customerInfo);
    const cart = useSelector(store => store.PizzaCartReducer);

    return (
        <div>
            <p>Step 3: Checkout</p>
            <ClientData customerInfo={customerInfo}/>
            <CartPizzas cart={cart}/>
            <p>{customerInfo.total}</p>
            <button onClick={handleClick} >Checkout</button>
        </div>
    )
}

export default Checkout;