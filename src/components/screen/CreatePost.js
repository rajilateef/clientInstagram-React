import React, {useState, useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";
import M from "materialize-css";
const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const history = useHistory()
    useEffect(() =>{
        if(url){
            fetch("/createPost", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    "Authorization" : "Bearer "+localStorage.getItem('jwt')
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url,
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.error){
                        M.toast({html: data.error, classes:"#c62828 red darken-3"})
                    }else {
                        M.toast({html: "Created Post Successfully", classes: "#43a047 green darken-1"})
                        history.push('/')
                    }
                }).catch(err => console.log(err))
        }
    }, [url])

    const postDetails = () =>{
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'instagram-images')
        data.append('cloud_name', "latech")
        fetch("https://api.cloudinary.com/v1_1/latech/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => setUrl(data.url))
            .catch(err => console.log(err))


    }
    return(
        <div className="card input-field" style={{
            margin: "30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)}/>
            <div className="file-field input-field" value={image} onChange={(e) => setImage(e.target.files[0])}>
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>

            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => postDetails()}>SUBMIT POST </button>
        </div>
    )
}
export default CreatePost