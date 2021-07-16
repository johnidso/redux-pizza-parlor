import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';


function SelectPizza () {
    const pizzas = useSelector(store => store.pizzas);
    return(
        <section id='pizzaList'>
        {pizzas.map( pizza => 
            <PizzaItem key={pizza.id} name={pizza.name} description={pizza.description} price={pizza.price} />
        )}
        </section>
    )
}

export default SelectPizza;