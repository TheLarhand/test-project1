import React, { useMemo, useRef, useState } from "react";
import './styles/App.css';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";

import ProductItem from "./components/ProductItem";
import ProductsContainer from "./components/ProductsContainer";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import ProductForm from "./components/ProductForm";

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
    {id: 4, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 5, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 6, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 7, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 8, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
    {id: 9, image: "https://object.pscloud.io/cms/cms/Photo/img_0_65_504_3_1.jpg", title: "монитор", price: 100000},
  ])



  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  // const bodyInputRef = useRef();

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log("ОТРАБОТАЛА ФУНКЦИЯ getSortedPosts");
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const createProduct = (newProduct) => {
    setProducts([...products,newProduct]);
  }

  const removeProduct = (product) => {
    setProducts(products.filter(p => p.id !== product.id));
  }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{marginTop: "20px"}}/>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        
        {sortedAndSearchedPosts.length !== 0
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List 1"/>
        :
        <h1 style={{textAlign: "center"}}>Постов нет :(</h1>

        }
        
        <PostList posts={posts2} title="Post List 2"/>

        <hr style={{marginTop: "20px"}}/>

      {/* <h1>{value}</h1>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <Counter/>
      <ClassCounter/> */}

      <ProductForm create={createProduct}/>

      <ProductsContainer remove={removeProduct} products={products} title="Магазин"/>
      
        
    </div>
  );
}

export default App;
