import React, { useState } from "react";
import MyBytton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const ProductForm = ({create}) => {
  const[product, setProduct] = useState({image: "", title: "", price: 0});

  const addNewProduct = (e) => {
    e.preventDefault();
    
    const NewProduct = {
      ...product, id: Date.now()
    }

    create(NewProduct);
    setProduct({image: "", title: "", price: 0})
  }
    return (
        <form>
        <MyInput
        value={product.title}
        onChange={e => setProduct({...product, title: e.target.value})}
        type="text"
        placeholder="название товара"
        />
        
        <MyInput
        value={product.price}
        onChange={e => setProduct({...product, price: e.target.value})}
        type="number"
        placeholder="цена товара"
        />

        <MyInput
        value={product.image}
        onChange={e => setProduct({...product, image: e.target.value})}
        type="url"
        placeholder="изображение товара"
        />
        <MyBytton onClick={addNewProduct}>Добавить товар</MyBytton>
      </form>
    )
}

export default ProductForm;