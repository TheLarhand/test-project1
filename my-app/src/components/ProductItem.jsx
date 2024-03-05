import MyBytton from "./UI/button/MyButton";

const ProductItem = (props) =>{
    return (
        <div className="product">
            <img style={{width: "250px"}} src={props.product.image} />
            <a href="#">{props.product.title}</a>
            <span>{props.product.price}</span>
            <MyBytton>В корзину</MyBytton>
            <MyBytton onClick={() => props.remove(props.product)}>удалить</MyBytton>
      </div>
    )
}

export default ProductItem;