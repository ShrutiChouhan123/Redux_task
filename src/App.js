import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
     
      <div class="card" style={{ "width": "18rem", background: "black", color: "white", marginLeft: "350px", marginTop: "50px" }}>
        <ul class="list-group list-group-flush" >
          <li class="list-group-item" style={{ background: "black", height: "80px" }}> <Link to="/users" style={{ color: "white", textDecoration: "none" }}>Users</Link></li>
          <li class="list-group-item" style={{ background: "black", height: "80px", color:"white" }}><Link to="/users/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link></li>
          <li class="list-group-item" style={{ background: "black", height: "80px",color:"white" }}><Link to="/users/comments" style={{ color: "white", textDecoration: "none" }}>Comments</Link></li>

        </ul>
      </div>

    </>
  )
}

export default App
