import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './CustomerInfo.css';

function CustomerInfo() {

    // Track the new customer info to add in our "local" state
    const [customer_name, setCustomer_Name] = useState('');
    const [street_address, setStreet_Address] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('Pickup');

    // "dispatch" is how we talk to redux from react
    const dispatch = useDispatch();

    // link history to useHistory to be able to change the user location
    const history = useHistory();

    const handleSubmit = (event) => {
         // Don't reload on form submit
         event.preventDefault();
        //lets add an if function to alert the user if the didnt fill something in

        if ( !customer_name || !street_address || !city || !zip) {
            alert('Please fill in all customer information!');
        }

        else {

            // Tell redux that we want to add new customer information
            dispatch({
                type: 'ADD_CUSTOMER_INFO',
                // Pass in the customer information, that we're tracking in state
                payload: {customer_name, street_address, city, zip, type}
            });

            // Clear the form field
            setCustomer_Name('');
            setStreet_Address('');
            setCity('');
            setZip('');
            setType(true);

            // direct browser to next route
            history.push('/checkout');
        }
    };
    
    return (

    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name"
                value={customer_name}
                onChange={event => setCustomer_Name(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Street Address"
                value={street_address}
                onChange={event => setStreet_Address(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="City"
                value={city}
                onChange={event => setCity(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Zip"
                value={zip}
                onChange={event => setZip(event.target.value)}
            />

            {/* <label class="container">Pickup
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
            </label>
            <label class="container">Delivery
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label> */}
            <input 
                type="radio"
                id="pickup" 
                name="pickup_or_delivery"
                checked="checked" 
                value={type}
                onClick={event => setType('Pickup')}
                />
                <label htmlFor="pickup">Pickup</label><br/>
            <input 
                type="radio" 
                id="delivery" 
                name="pickup_or_delivery" 
                value={type} 
                onClick={event => setType('Delivery')}
                />
                <label htmlFor="delivery">Delivery</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
    )
}

export default CustomerInfo;

// Customer information reducer:

// const customerInfo = (state = [], action) => {
//     if (action.type === 'ADD_CUSTOMER_INFO') {
//         // Create a new array
//         // which includes all the values from our previous array
//         // AND ALSO the new value in action.payload
//         console.log(`The customer information added was ${action.payload}`);
//         return [...state, action.payload];
//     }

//     return state;
// };