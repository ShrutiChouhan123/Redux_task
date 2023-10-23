import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
    return (
        <>


            <div class="card" style={{ "width": "18rem", background: "black", color: "white", marginLeft: "350px", marginTop: "50px" }}>
                <ul class="list-group list-group-flush" >
                    <li class="list-group-item" style={{ background: "black", height: "80px" }}> <Link to="/users/add" style={{ color: "white", textDecoration: "none" }}>AddUsers</Link></li>
                    <li class="list-group-item" style={{ background: "black", height: "80px" }}> <Link to="/users/showusers" style={{ color: "white", textDecoration: "none" }}>ShowUsers</Link></li>
                    <li class="list-group-item" style={{ background: "black", height: "80px" }}> <Link to="/users/addpost" style={{ color: "white", textDecoration: "none" }}>Add POST</Link></li>


                </ul>
            </div>


        </>
    )
}

export default Users