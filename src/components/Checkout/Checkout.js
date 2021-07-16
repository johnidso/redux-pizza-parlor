import {useHistory} from 'react-router-dom';

import ClientData from './ClientData.js'
import CartPizzas from './CartPizzas.js';

function Checkout() {
    // const history = useHistory();

    // const handleClick = () => {
    // history.push('/');
    // }

    return (
        <div>
            {/* <button onClick={handleClick} >Checkout</button> */}
            <p>Step 3: Checkout</p>
            <ClientData />
            <CartPizzas />
        </div>
        
    )
}

export default Checkout;