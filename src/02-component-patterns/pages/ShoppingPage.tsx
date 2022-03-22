import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductsButtons,
} from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
};

export const ShoppingPage = () => {
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
                <ProductCard className="bg-dark text-white" product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                <ProductCard className="bg-dark text-white" product={product}>
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductsButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard
                    style={{
                        backgroundColor: '#70D1F8',
                    }}
                    product={product}
                >
                    <ProductImage
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                        }}
                    />
                    <ProductTitle
                        style={{
                            fontWeight: 'bold',
                        }}
                    />
                    <ProductsButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};
