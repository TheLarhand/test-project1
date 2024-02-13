import ProductItem from "./ProductItem";

const ProductsContainer = ({products}) =>{
    return (
        <div className="products">
            {products.map((product) => 
                <ProductItem product={product} key={product.id} />
            )}
        </div>
    )
}

export default ProductsContainer;