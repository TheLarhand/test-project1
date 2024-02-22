import React, { useState } from "react";
import MyBytton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";



const PostForm = ({create}) => {
    const[post, setPost] = useState({title: '', body: ''})
    
    const addNewPost = (e) => {
        e.preventDefault();
        
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        // setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
      }

    return (
        <form>
        {/* Управляемый компонент  */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="post name"
         />
         <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="post name"
         />
        

         {/* Неуправляемый компонент/Неконтролируемый компонент 
        <MyInput
         ref={bodyInputRef}
         type="text" 
         placeholder="post description"
         /> */}
        
        <MyBytton onClick={addNewPost}>Create post</MyBytton>
      </form>
    )
}

export default PostForm;