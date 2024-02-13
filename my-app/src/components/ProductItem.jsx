const ProductItem = (props) =>{
    return (
        <div className="product">
            <img style={{width: "250px"}} src={props.product.image} />
            <a href="#">{props.product.title}</a>
            <span>{props.product.price}</span>
        <button>В корзину</button>
        
      </div>
    )
}

export default ProductItem;