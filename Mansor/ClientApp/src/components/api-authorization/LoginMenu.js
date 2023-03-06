import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';
import '../../custom.css'

export class LoginMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name
        });
    }

    render() {
        const { isAuthenticated, userName } = this.state;
        if (!isAuthenticated) {
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(loginPath);
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
            return this.authenticatedView(userName, profilePath, logoutPath);
        }
    }

    authenticatedView(userName, profilePath, logoutPath) {
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-white" to={"/taskGroups"} id="btn-groups">Groups</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-white" to={logoutPath} id="btn-login">Logout</NavLink>
            </NavItem>
        </Fragment>);

    }

    anonymousView(loginPath) {
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-white" to={loginPath} id="btn-login">Log In</NavLink>
            </NavItem>
        </Fragment>);
    }
}