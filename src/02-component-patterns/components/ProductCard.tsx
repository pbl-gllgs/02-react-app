import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import {
    onChangeArgs,
    Product,
    ProductContextProps,
} from '../interfaces/interfaces';

export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?:number
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value
}: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product,value });
    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
