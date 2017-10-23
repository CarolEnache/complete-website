import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import './navigation.css';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">LOGO</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Web Development</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Web Design Implementation</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">SEO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/CarolEnache" target='_blank'>Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="tel:07496046247">07496046247</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}