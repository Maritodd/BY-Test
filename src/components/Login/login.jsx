import React from "react";
import style from "./login.module.css"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <div className={style.login}>
            <div className={style.loginForm}>
                <h1 className={style.headerTitle}>Login</h1>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field className={style.field} placeholder={"Email"} name={'email'} component={"input"}/>
                    </div>
                    <div >
                        <Field className={style.field} placeholder={"Password"} name={'password'} component={"input"} type="password"/>
                    </div>
                    <button className={style.submit}>Login</button>
                </form>
            </div>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'email'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password);
    };

    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {login})(Login);
