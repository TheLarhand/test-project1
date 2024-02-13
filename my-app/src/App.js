import React, { useState } from "react";
import './styles/App.css';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import MyBytton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import ProductItem from "./components/ProductItem";
import ProductsContainer from "./components/ProductsContainer";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'HTML', body: 'Description'},
    {id: 3, title: 'C++', body: 'Description'},
    {id: 4, title: 'C#', body: 'Description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Photoshop', body: 'Description'},
    {id: 2, title: 'Illustrator', body: 'Description'},
    {id: 3, title: 'InDesign', body: 'Description'},
  ])

  const [products, setProducts] = useState([
    {id: 1, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 2, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 3, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 1, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 2, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 3, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 1, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 2, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 3, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
  ])
  // const [value, setValue] = useState('Text')

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="post name"/>
        <MyInput type="text" placeholder="post description"/>
        
        <MyBytton>Create post</MyBytton>
      </form>
        <PostList posts={posts} title="Post List 1"/>
        <PostList posts={posts2} title="Post List 2"/>
      {/* <h1>{value}</h1>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <Counter/>
      <ClassCounter/> */}
      <ProductsContainer products={products}/>
      
        
    </div>
  );
}

export default App;
