import Button from '../1_atoms/ButtonText/Button';

const PostItom = (props) => {
  return (
    
      <div className="post">
      <div className="post__content">

          <strong>{props.number} {props.post.title} </strong>
          <div> {props.post.body}</div>
  
      </div>
      <div> 
        <Button onClick={()=>props.remove(props.post)} >Удалить</Button> 
      </div>
    </div>
  
  );
};


export default PostItom;