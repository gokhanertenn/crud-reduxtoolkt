import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addPost } from './redux/postsSlice';

function Posts() {
   
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const posts = useSelector((state) => state.post.items)
    
    const dispatch = useDispatch();
  return (
    <div>
      <div className='form'>
        <input
        value={title}
        type="text" 
        placeholder='Enter Posts Title'
        onChange={(e)=> setTitle(e.target.value)}
        ></input>
        <input 
        value={desc}
        type="text"
        placeholder='Enter Posts Descriptions'
        onChange={(e) => setDesc(e.target.value)}
        ></input>
        <button onClick={() => dispatch(addPost({id:posts.length + 1,title,desc}) )}
        >ADD</button>
      </div>

       <div className='posts'>
       
        {posts.length > 0 ?    posts.map(posts => <div className='posts'>
               <h2>{posts.title}</h2>
               <p>{posts.desc}</p>
               <button>Edit</button>
               <button>Delete</button>
               <button>Update</button>




            </div>): "there is no posts"} 


       

    </div>
  </div>)
}

export default Posts
