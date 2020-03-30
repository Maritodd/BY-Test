import React from "react";
import {getUserFromLocalCookie, getUserFromServerCookie} from "../../lib/auth";
import Router from "next/router";
import Page from "./Page";
import {connect} from "react-redux";
import cookie from 'react-cookies'


class PageContainer extends React.Component {
    componentWillMount() {
        let data =  { cookies: cookie.loadAll() };
        // => { cookies: { token: 123456789, _ga: GA198712 } }
        console.log(data);
    }


    render() {
        return <Page {...this.props} />;
    }
}
    export default connect(null)(PageContainer);
