import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";

function header() {
    return (
        <nav className ="header">
            {/*logo on the left -> img*/}
            <Link> <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
           
            {/*serach box*/}
            <div className="header__search">
                <input type="text" className ="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            {/*first link*/}
            <Link to = "./Settings" className ="header__link">
            <div className ="header__option">
            <span className ="header__optionOne">Hello</span>
            <span className ="header__optionTWo" >Sign in</span>
            </div>
            </Link>

            {/*2 link*/}

            <Link to = "/" className ="header__link">
            <div className ="header__option">
            <span className ="header__optionOne">Your</span>
            <span className ="header__optionTWo">Orders</span>
            </div>
            </Link>

            {/*3 link*/}

            <Link to = "/" className ="header__link">
            <div className ="header__option">
            <span className ="header__optionOne">Your</span>
            <span className ="header__optionTWo">Profile</span>
            </div>
            </Link>
            <div className = "headerNav">

            </div>
        </nav>
    )
}

export default header
