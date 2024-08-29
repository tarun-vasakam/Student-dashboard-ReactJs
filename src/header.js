import React from "react";
import { IoIosNotifications } from "react-icons/io";

function Header(){
    return(
        <header className="header-main">
            <h1>Welcome, <span>Tarun Vasakam </span></h1>
            <button className="bell-btn"><IoIosNotifications size="30"/></button>
        </header>
    );
}

export default Header;