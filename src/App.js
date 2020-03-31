import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import LoginForm from "./components/Login/login";
import {Route} from "react-router-dom";
import Course from "./components/Сourse/сourse";
import Classes from "./components/Classes/сlasses";
import PageContainer from "./components/UserPage/PageContainer";
import ClassesContainer from "./components/Classes/сlassesContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "next/router";
import HeaderContainer from "./components/Header/headerContainer";
import {getAuthUserData, logOut} from "./redux/auth-reducer";


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <HeaderContainer />
                <div className="app-wrapper__content">
                    <Route path={"/login"} render={() => <LoginForm/>}/>
                    <Route path={"/course"} render={() => <Course/>}/>
                    <Route path={"/classes"} render={() => <ClassesContainer/>}/>
                    <Route path={"/page"} render={() => <PageContainer/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    user: state.auth.user
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getAuthUserData, logOut}))(App);
