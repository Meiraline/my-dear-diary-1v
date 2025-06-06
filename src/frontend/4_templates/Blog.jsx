import PostItom from "../3_organisms/PostItom";
import PostIist from "./PostList";
import PostForm from "../3_organisms/PostForm";
import Select from "../1_atoms/Select/Select";
import React, { use, useRef, useState } from 'react';





const Blog = () => {

const[posts, setPosts] = useState([
    { id: 1, title: "wePost 1", body: "dfsfhis is the body of post 1" },
    { id: 2, title: "ePost 2", body: "Twewhis is the body of post 2" },
    { id: 3, title: "ePost 3", body: "rqwewqehis is the body of post 3" }])

    const [selectedSort, setSelectedSort] = useState('');


    const CretePost = (newPost) => {
      setPosts([...posts, newPost]);
    }
   
    const RemovePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
  setSelectedSort(sort);
  setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
}


  return (
    <div >

     <PostForm create ={CretePost}></PostForm>
     <hr />

    <Select 
      value={selectedSort}
      onChange={sortPosts}
      defaultValue="Сортировка по"
      options={[
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" }
      ]}
    />
      
     


     {posts.length !==0
        ? <h1><PostIist remove={RemovePost} posts={posts} title={"My blog"} /></h1>
        : <h1>Постов нет</h1>
     }
      
       
    </div>
     
  
  );
};


export default Blog;




     