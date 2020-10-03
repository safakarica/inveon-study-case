import React, {Component, Fragment} from 'react';
import * as ROUTES from "../constants/routePaths";
import HomePage from "../pages/homePage";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import HeaderComponent from "./layout/headerComponent";

class RoutesComponent extends Component {

    render() {
        return (
            <Fragment>
                <HeaderComponent/>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={HomePage}/>
                </Switch>
            </Fragment>

        );
    }
}

export default withRouter(connect()(RoutesComponent));
