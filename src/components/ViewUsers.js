import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewUsers() {
    const uid = useParams();
    const id = uid.id;

    const [user, setUser] = useState(null);


    console.log(id)


    axios.get(`http://localhost:3004/posts/${id.slice(1)}`).then(res => setUser(res.data)).catch(error => {
        console.error('Error fetching user:', error);
    })


    return (

        <>
            {/* <h1>hello{id}</h1> */}
            <div>
                {user && (
                    <div>
                      
                        <p>{user.id}</p>
                        <p>{user.tittle}</p>
                        <p>{user.description}</p>


                    </div>


                )}

            </div>

         
        </>
    )
}

export default ViewUsers