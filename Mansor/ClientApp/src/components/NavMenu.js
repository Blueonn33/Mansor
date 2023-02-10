import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header id="navigation-content" className='fixed-top'>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white" light>
                    <Container>

                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>


                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <div className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-white" to="/taskGroups" id="btn-groups">Groups</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-white" to="/tasks" id="btn-login">Log In</NavLink>
                                </NavItem>
                            </div>
                            <NavbarBrand tag={Link} to="/" id="brand">MANSOR</NavbarBrand>
                            <img className="logo-img" src='/Images/Logo.png' height="90" width="100" alt="a grey round that gets darker"></img>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}


