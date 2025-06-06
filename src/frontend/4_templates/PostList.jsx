import PostItom from "../3_organisms/PostItom";




const PostIist = ({posts,title,remove}) => {
  return (
    <div>
        <h1>{title}</h1>
         {posts.map((post,index) => (
            <PostItom remove={remove} number={index + 1} post={post} key={post.id} />
         ))}
    </div>
     
  
  );
};


export default PostIist;




     