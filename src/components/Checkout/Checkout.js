import {useHistory} from 'react-router-dom';


function Checkout() {
    const history = useHistory();

    const handleClick = () => {
    history.push('/');
    }

    return (
        <div>
            <p>Linked</p>
            <button onClick={handleClick} >Checkout</button>
        </div>
        
    )
}

export default Checkout;