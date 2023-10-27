import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg} alt="meals-img"/>
            </div>
        </Fragment>
    )
}

export default Header;