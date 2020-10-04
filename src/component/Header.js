import React, { useState } from 'react';
import logo1 from '../img/logo1.png';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import db from '../firebase';
import { auth, provider, firebaseApp } from '../firebase';

function Header({ onSearchItem }) {

    const [user, setUser] = useState();
    const [input, setInput] = useState('');

    function googleSignUp() {
        auth.signInWithPopup(provider);
    }

    function SearchItem(val) {
        onSearchItem(val);
        setInput('');
    }

    const search = (e) => {
        if (e.key === 'Enter') {
            onSearchItem(e.target.value);
            setInput('');
        }
    }

    firebaseApp.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUser(user.displayName);
        } else {
            setUser("Sign In");
        }
    });

    return (
        <nav className="header">
            <Link to="/">
                <img src={logo1} alt="logo image" className="header__logo" />
                {/* <Logo className="header__logo" /> */}
            </Link>
            <div className="header__search">
                <input value={input} type="text" className="header__searchInput" onChange={event => setInput(event.target.value)} onKeyDown={search} />
                <SearchIcon className="header__searchIcon" onClick={(event: React.MouseEvent) => { SearchItem(input) }} />
            </div>
            <div className="header__nav">
                <div className="header__option" onClick={googleSignUp}>
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">{user}</span>
                </div>
            </div>
        </nav >
    )
}

export default Header
