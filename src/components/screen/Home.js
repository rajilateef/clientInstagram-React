import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div className="card-content">
                    <i className="material-icons">favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
    )
}
export default Home