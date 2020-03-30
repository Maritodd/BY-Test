import React from "react";
import * as axios from "axios";
import Classes from "./сlasses";
import {connect} from "react-redux";
import {getUsersArticles} from "../../redux/class-reducer";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';


class ClassesContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersArticles(2);
    };

    render() {
        return (
           <Classes {...this.props} food={this.props.food}/>
        )
    }
}

const mapStateToProps = (state) => ({
        food: state.class.food,
        articles: state.class.articles,
        newPostText: state.class.newPostText
});
export default compose(
    connect(mapStateToProps, {getUsersArticles,}),
    withRouter
) (ClassesContainer);
