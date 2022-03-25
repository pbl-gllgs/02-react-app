import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductsButtons,
} from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../../data/products';

export const ShoppingPage = () => {
    
    const { shoppingCart , onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        className="bg-dark text-white"
                        product={product}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white text-bold" />
                        <ProductsButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        className="bg-dark text-white"
                        product={product}
                        style={{
                            width: '100px',
                        }}
                        value={product.count}
                        onChange={(event) => onProductCountChange(event)}
                    >
                        <ProductImage className="custom-image" />
                        <ProductsButtons
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
