import React from "react";
import style from "./login.module.css"
import {reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import * as axios from "axios";

const RegisterForm = (props) => {
    return (
        <div className={style.login}>
            <div className={style.loginForm}>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <input placeholder={"Email"} name={'identifier'}/>
                    </div>
                    <div>
                        <input placeholder={"Password"} name={'password'} type="password"/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'email'})(RegisterForm);

const Register = (props) => {

    axios.post(`http://localhost:1337/auth/local`, {
        identifier: 'author@strapi.io',
        password: 'strapi',
    }).then(response => {console.log("Data: ", response.data)});


    const data1 =  axios.get('http://localhost:1337/articles', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTgyOTI2MDg0LCJleHAiOjE1ODU1MTgwODR9.HOzoyvQxqcL2SJG_e8X8IXepjRsILg9Ou0Zk5rE_k6w',

        },
    });
    console.log(data1);

    axios.post('http://localhost:1337/auth/local/register', {
        username: "bitch",
        email: "bitch@strapi.io",
        password: "strapi"
    }).then(response => {
        console.log('Well done!');
        console.log("User profile", response.data.user);
        console.log("user token", response.data.jwt);
    }).catch(error => {console.log("Some Error: ", error)});

    const onSubmit = (formData) => {
        this.props.login(formData.identifier, formData.password);
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default connect(null, {login})(Register);