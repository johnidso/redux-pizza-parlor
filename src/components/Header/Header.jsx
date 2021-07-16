import { useSelector } from "react-redux";
import "./Header.css"

function Header(){
  const total = useSelector(store => store.totalReducer);
    return (
        <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <h2 className= 'App-Total'> Total: {total} </h2>
        </header>
        </div>
    );
}



export default Header;