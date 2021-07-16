import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';


function SelectPizza () {
    const pizzas = useSelector(store => store.pizzas);
    console.log(pizzas);
    return(
        <section id='pizzaList'>
        {pizzas.map( pizza => {
            return <PizzaItem key={pizza.id} name={pizza.name} description={pizza.description} price={pizza.price} image_path={pizza.image_path} />
})}
        </section>
    )
}

export default SelectPizza;