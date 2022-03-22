import { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductsButtons = ({className,style}: Props) => {
    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button
                onClick={() => increaseBy(-1)}
                className={styles.buttonMinus}
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
                +
            </button>
        </div>
    );
};