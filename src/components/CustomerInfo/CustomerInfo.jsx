import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './CustomerInfo.css';

function CustomerInfo() {

    // Track the new customer info to add in our "local" state
    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZip, setNewZip] = useState('');
    const [pickup, setPickup] = useState(true);

     // "dispatch" is how we talk to redux from react
     const dispatch = useDispatch();

    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

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
                onChange={setPickup(true)}
                />
                <label for="pickup">Pickup</label><br/>
            <input 
                type="radio" 
                id="delivery" 
                name="pickup_or_delivery" 
                value={pickup} 
                onChange={setPickup(false)}
                />
                <label for="delivery">Delivery</label><br/>
            <button type="submit">Next</button>
        </form>
    </div>
    )
}

export default CustomerInfo;