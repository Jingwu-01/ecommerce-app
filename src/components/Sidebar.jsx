import React from 'react';
import Logo from "../images/logo.jpeg";

function Sidebar () {
    return (
        <aside id="sidebar">
            <img id="logo" src={Logo} alt="logo"/>
            <form>
                <input type="search" id="search" placeholder='Search'/>
            </form>
                <div>
                    <button id="tag"></button>
                    <button id="account"></button>
                    <button id="cart"></button>
                </div>
            <button id='catagories'>Catagories</button>
        </aside>
    )
}

export default Sidebar; 