import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/action';
import { removeTodo } from '../actions/action';
import axios from 'axios';
// import { updateTodo } from '../actions/action';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email,setemail] =useState('');
  const [mobile,setMobile] =useState('');


  const baseUrl="http://localhost:3004/users";

  const handleAddTodo = () => {
    dispatch(addTodo(username));
    dispatch(addTodo(name));
    dispatch(addTodo(email))
    dispatch(addTodo(mobile));
 
  //  const data = [username,name,email.mobile]
   axios.post(baseUrl,{username:username,name:name,email:email,mobile:mobile})
   

    setUsername('');
    setemail('')
    setMobile('')
    setName('')
  };

  // const handleUpdateTodo = (todo) => {
  //   dispatch(updateTodo({
  //     ...todo,
  //     text: 'Updated Text'
  //   }));
  // };

  // const handleRemoveTodo = (id) => {
  //   dispatch(removeTodo(id));
  // };

  return (
    <>
    <div style={{background:"black",color:"white",width:"50%",height:"300px",marginTop:"50px",marginLeft:"250px",borderRadius:"40px"}} >
      <input style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="text" placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
       <input  style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="text" placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/>
       <input  style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="email" placeholder='email'
        value={email}
        onChange={(e) => setemail(e.target.value)}
      /><br/>
       <input  style={{marginLeft:"70px",marginTop:"20px",borderRadius:"25px",width:"70%"}}
        type="number"  placeholder='mobile'
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      /><br/>
      <button  style={{marginLeft:"200px",marginTop:"20px",background:"white",borderRadius:"20px"}} onClick={handleAddTodo}>Add Todo</button>
      {/* <ul> */}
        {/* {console.log(todos)} */}
        {/* {todos.map((todo) => {

          return (
            <>
            <li key={todo.id}>
              {todo.text}
              {/* <button onClick={() => handleUpdateTodo(todo)}>Update</button> */}
             
            {/* </li> */}
            {/* <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button> */}

            {/* </> */}
          {/* ) */}
          
          
        {/* })} */}
      {/* </ul>  */}
      </div>
    </>
  );
};

export default TodoList;