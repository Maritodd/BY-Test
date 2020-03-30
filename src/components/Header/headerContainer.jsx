import React from "react";
import {getAuthUserData, login, logOut} from "../../redux/auth-reducer";
import Header from "./header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getAuthUserData();
    // }
    render() {
        return <>
            <Header {...this.props} login={this.props.login} logOut={this.props.logOut}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {login, logOut, getAuthUserData}) (HeaderContainer);
