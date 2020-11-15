import React from 'react'
import {Link} from "react-router-dom";

const signin= () => {
    return (
       <div className="mycard">
           <div className="card auth-card input-field">
               <h2>Instagram</h2>
               <input type="text" placeholder="email"/>
               <input type="text" placeholder="password"/>
               <button className="btn waves-effect waves-light #64b5f6 blue darken-1">Signin </button>
               <h5>
                   <Link to="/signup">Dont have an account ?</Link>
               </h5>
           </div>
       </div>
    )
}
export default signin