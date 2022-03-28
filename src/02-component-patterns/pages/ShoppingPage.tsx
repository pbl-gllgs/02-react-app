import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductsButtons,
} from '../components';
import '../styles/custom-styles.css';

import { products } from '../../data/products';
import { count } from 'console';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div>
                <ProductCard
                    key={product.id}
                    className="bg-dark text-white"
                    product={product}
                    initialValues={{ count: 4, maxCount: 10 }}
                >
                    {({ reset, increaseBy, count,maxCount, isMaxCountReached }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white text-bold" />
                            <ProductsButtons className="custom-buttons" />
                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            <button disabled={isMaxCountReached} onClick={() => increaseBy(2)}>+2</button>
                            <span>{count} - {maxCount}</span>
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    );
};
