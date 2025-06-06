
import React, { useState } from 'react';
import Input from '../1_atoms/Input/Input';
import Button from '../1_atoms/ButtonText/Button';


const PostForm = ({create}) => {

  
   const [post, setPost] = useState('{title: "", body: ""}');

   const addNewPost = (e) => {
      e.preventDefault();
      const newPost = {
        ...post, id: Date.now()
      };
      create(newPost);
      setPost({ title: "", body: "" });
     
    }
   
    return (
     
        <form action="">
        <Input 
        type="text"
        onChange={event => setPost({ ...post, title: event.target.value })} 
        placeholder="название"
        value={post.title}
       
        />

        <Input 
        type="text" 
        placeholder="описание"
        onChange={event => setPost({ ...post, body: event.target.value })} 
        value={post.body}
        />


        <Button onClick={addNewPost} > создать новый пост </Button>
     



      </form>

    
      );
};
 

export default PostForm;