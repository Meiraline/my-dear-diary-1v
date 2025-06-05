import Counter from "./frontend/3_organisms/Counter";
import './App.css';
import PostItom from "./frontend/3_organisms/PostItom";
import React, { use, useRef, useState } from 'react';
import PostIist from "./frontend/4_templates/PostList";
import Button from "./frontend/1_atoms/Button/Button";
import Input from "./frontend/1_atoms/Input/Input";






function App() {

  const[posts, setPosts] = useState([
    { id: 1, title: "Post 1", body: "This is the body of post 1" },
    { id: 2, title: "Post 2", body: "This is the body of post 2" },
    { id: 3, title: "Post 3", body: "This is the body of post 3" }])



    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
      e.preventDefault();
      const newPost = {
        id: Date.now(),
        title: title,
        body: body
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }


    return (
    <div className="App">

      <form action="">
        <Input 
        type="text"
        onChange={event => setTitle(event.target.value)} 
        placeholder="название"
        value={title}
       
        />

        <Input 
        type="text" 
        placeholder="описание"
        onChange={event => setBody(event.target.value)} 
        value={body}
        />


        <Button onClick={addNewPost} > создать новый пост </Button>
     
      </form>

     <PostIist posts={posts} title={"My blog"} />
       
       
    </div>
  );
}



export default App;
