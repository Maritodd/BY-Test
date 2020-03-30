import React from "react";
import {NavLink} from "react-router-dom";
import style from "./header.module.css"

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.headerItem}>
                <NavLink className={style.headerItems} to={"/classes"}>Classes</NavLink>
            </div>
            <div className={style.headerItem}>
                <NavLink className={style.headerItems} to={"/course"}>Course</NavLink>
            </div>
            <h1 className={style.headerTitle}>Your Education</h1>
            <div className={style.headerItem}>
                {props.user
                    ? <div>{props.user.username} <div><button onClick={props.logOut}>Log Out</button></div>
                    </div>
                    : <NavLink className={style.headerItems} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;
