import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';


import ClientData from './ClientData.js'
import CartPizzas from './CartPizzas.js';

function Checkout() {
    // const history = useHistory();

    const handleClick = () => {
        console.log(customerInfo, cart);
    }

    const customerInfo = useSelector(store => store.customerInfo);
    const cart = useSelector(store => store.PizzaCartReducer);

    return (
        <div>
            <p>Step 3: Checkout</p>
            <ClientData customerInfo={customerInfo}/>
            <CartPizzas cart={cart}/>
            <button onClick={handleClick} >Checkout</button>
        </div>
        
    )
}

export default Checkout;