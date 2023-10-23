import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddPost() {
    const [post,addpost] =useState(null);
    // const 
    // useEffect(()=>{
    //     axios.post('http://localhost:3004/posts').then(res=>addpost(res.data))
    // })
    const [id,setid] =useState("");
    const [tittle,settitle] = useState("");
    const [desc,setdesc] = useState("")
    const AddPostdata =(e) =>{
        axios.post('http://localhost:3004/posts',{id:id,tittle:tittle,description:desc}).then(res=>addpost(res.data))
    }
  return (
    <>
     <div style={{background:"black",color:"white",width:"50%",height:"300px",marginTop:"50px",marginLeft:"250px",borderRadius:"40px"}} >
      <input style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="number" placeholder='enter id'
        value={id}
        onChange={(e) => setid(e.target.value)}
      /><br/>
       <input  style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="text" placeholder='tittle'
        value={tittle}
        onChange={(e) => settitle(e.target.value)}
      /><br/>
       <input  style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="text" placeholder='description'
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
      /><br/>
      <br/>
      <button  style={{marginLeft:"200px",marginTop:"20px",background:"white",borderRadius:"20px"}} onClick={AddPostdata}>Add Todo</button>
      
        
          
   
      </div>
    </>
  )
}

export default AddPost