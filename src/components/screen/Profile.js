import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from "../../App";

const Profile = () => {
    const [pics, setPics] = useState([])
    const {state, dispatch} = useContext(UserContext)
    useEffect(() => {
        fetch('/mypost', {
            method: "GET",
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem('jwt')

            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
                console.log(result)
            })
    }, [])
    return (
       <div style={{maxWidth: "550px", margin:"0px auto"}}>
           <div style={{
               display:"flex",
               justifyContent: "space-around",
               margin: "18px 0px",
               borderBottom:"1px solid grey"
           }}>
               <div>
                   <img style={{width: "160px", height: "160px", borderRadius:"80px"}} src="https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
               </div>
               <div>
                   <h4>{state ? state.name : "Default"}</h4>
                   <div style={{
                       display: "flex",
                       justifyContent: "space-between",
                       width: "108%",

                   }}>
                       <h6>40 posts</h6>
                       <h6>40 followers</h6>
                       <h6>40 following</h6>
                   </div>
               </div>
           </div>
           <div className="gallery">
               {
                   pics.map(item =>{
                       return(
                           <img key={item._id} className="item" src={item.photo} alt={item.title}/>)
                   })
               }


           </div>
       </div>
    )
}
export default Profile