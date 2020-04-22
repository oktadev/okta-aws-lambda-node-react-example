import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { Navbar, Nav, Form, Button } from 'react-bootstrap'

const Header = () => {
    const { authState, authService } = useOktaAuth();

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    const button = authState.isAuthenticated ?
        <Button variant="secondary" onClick={() => { authService.logout() }}>Logout</Button> :
        <Button variant="secondary" onClick={() => { authService.login() }}>Login</Button>

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Card Sharks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/game">New Game</Nav.Link>
                </Nav>
                <Form inline>
                    {button}
                </Form>
            </Navbar.Collapse>
        </Navbar>

    );
};
export default Header;