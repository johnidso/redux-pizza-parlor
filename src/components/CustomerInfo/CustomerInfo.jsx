import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function CustomerInfo() {

    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

        // Tell redux that we want to add new customer information
        dispatch({
            type: 'ADD_CUSTOMER_INFO',
            // Pass in the customer information, that we're tracking in state
            payload: {newName, newAddress, newCity, newZip}
        });

        // Clear the form field
        setNewName('');
        setNewAddress('');
        setNewCity('');
        setNewZip('');
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
            <button type="submit">Next</button>
        </form>
    </div>
    )
}

export default CustomerInfo;