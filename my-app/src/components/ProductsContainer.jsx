import ProductItem from "./ProductItem";

const ProductsContainer = ({remove, products, title }) =>{
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            
            <div className="products">
            {products.map((product) => 
                <ProductItem remove={remove} product={product} key={product.id} />
            )}
        </div>
        </div>
        
    )
}

export default ProductsContainer;