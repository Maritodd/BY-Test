import React from "react";
import Classes from "../Classes/сlasses";
import style from "./сourse.module.css"
import {NavLink} from "react-router-dom";

const Course = (props) => {
    return (
        <div className={style.course}>
            <span className={style.education}>Education</span>
            <div className={style.courseClasses}>
                <div>
                    <NavLink to={"/classes/1"}>Classes 1</NavLink>
                </div>
                <div>
                    <NavLink to={"/classes/2"}>Classes 2</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Course;