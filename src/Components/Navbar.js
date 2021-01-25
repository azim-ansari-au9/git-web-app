import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Menu = () => {
    return (
        <div className="old">
        <nav className="navbar navbar-expand-lg ">
            <Link className="navbar-brand" to="/home">Github Finder</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto  my-2" >
                    <li className="nav-item ">
                        <Link className="nav-link" to="/home">Home </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}
export default Menu;