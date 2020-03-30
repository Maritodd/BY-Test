import React from "react";
import * as axios from "axios";
import {getUsersArticles} from "../../redux/class-reducer";
import Article from "./Article/Article";


const Classes = (props) => {
    let articleElement = props.articles.map( p => <Article title={p.title} content={p.content} food={props.food} />);

    return (
        <div>
            <div>{articleElement}</div>
            <Article food={props.food} />
        </div>
    )
};

export default Classes;
