import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.desc}</div>
                <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div></div>
        </li>
    )
};

export default MealItem;