
//This will get the client data which should be stored in global state
import { useSelector } from 'react-redux';

function ClientData(props){
    const customerInfo = props.customerInfo
    
    return(
        <div>
            <p>{customerInfo.customer_name}</p>
            <p>{customerInfo.street_address}</p>
            <p>{customerInfo.city} {customerInfo.zip}</p>
            <p>{customerInfo.type}</p>
        </div>
    )
}

export default ClientData;