import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from "../App";

const Navbar = () => {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext)
    const renderList = () => {
        if(state){
            return[
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">create</Link></li>,
                <li><button className="btn #c62828 red darken-3"
                            onClick={() => {localStorage.clear()
                                dispatch({type: "CLEAR"})
                                history.push('/signin')
                            }}>
                    Signout
                </button></li>
            ]
        }else{
            return [
                <li><Link to="/signin">Signin</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }
    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar