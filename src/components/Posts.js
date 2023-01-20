import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addPost,deletePost,updatePost } from './redux/postsSlice';

function Posts() {
   
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [upTitle,setUpTitle] = useState("");
    const [upDesc,setUpDesc] = useState("");
    const [edit,setEdit] = useState(false);
    const [id,setId] = useState(null);
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
        <button onClick={
          () =>{ dispatch(addPost({id:posts.length + 1,title,desc}) )
        setTitle("");
        setDesc("");
        
        }}
        
        >ADD</button>
      </div>

       <div className='posts'>
       
        {posts.length > 0 ?    posts.map(posts => <div key={posts.id} className='posts'>
               <h2>{posts.title}</h2>
               <p>{posts.desc}</p>
               <button onClick={() =>{
                 setEdit(true)
                 setId(posts.id)
               }
               
                
                }>Edit</button>
               <button onClick={() => dispatch(deletePost({id:posts.id}))}>Delete</button>
              
              {edit &&  id == posts.id &&   
                 
              <>
              
                <input 
                type="text"
                placeholder='Edit'
                onChange={(e) => setUpTitle(e.target.value)}
                ></input>
                <input 
                type="text"
                placeholder='Edit'
                onChange={(e) => setUpDesc(e.target.value)}
                ></input>
                <button onClick={() => {dispatch(updatePost({id:posts.id,title:upTitle,desc:upDesc})
               
                )
                
                setEdit(false)
                }}>Update</button>
              
              </>
              
              
              }




            </div>): "there is no posts"} 


       

    </div>
  </div>)
}

export default Posts
