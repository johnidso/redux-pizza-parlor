import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './CustomerInfo.css';

function CustomerInfo() {

    // Track the new customer info to add in our "local" state
    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZip, setNewZip] = useState('');
    const [pickup, setPickup] = useState('Pickup');

    // "dispatch" is how we talk to redux from react
    const dispatch = useDispatch();

    // link history to useHistory to be able to change the user location
    const history = useHistory();

    const handleSubmit = (event) => {
         // Don't reload on form submit
         event.preventDefault();
        //lets add an if function to alert the user if the didnt fill something in
        console.log(newName, newAddress, newCity, newZip);
        if ( !newName || !newAddress|| !newCity || !newZip ){
            alert('Please fill in all customer information!');
        }

        else {

            // Tell redux that we want to add new customer information
            dispatch({
                type: 'ADD_CUSTOMER_INFO',
                // Pass in the customer information, that we're tracking in state
                payload: {newName, newAddress, newCity, newZip, pickup}
            });

            // Clear the form field
            setNewName('');
            setNewAddress('');
            setNewCity('');
            setNewZip('');
            setPickup(true);

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
                value={newName}
                onChange={event => setNewName(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Street Address"
                value={newAddress}
                onChange={event => setNewAddress(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="City"
                value={newCity}
                onChange={event => setNewCity(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Zip"
                value={newZip}
                onChange={event => setNewZip(event.target.value)}
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
                value={pickup}
                onChange={event => setPickup('Pickup')}
                />
                <label htmlFor="pickup">Pickup</label><br/>
            <input 
                type="radio" 
                id="delivery" 
                name="pickup_or_delivery" 
                value={pickup} 
                onChange={event => setPickup('Delivery')}
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