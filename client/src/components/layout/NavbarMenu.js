import React, { useContext } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import learnItLogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export const NavbarMenu = () => {
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext)

    const logout = () => logoutUser()

    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow px-3'>
            <Navbar.Brand className='fw-bolder text-white'>
                <img
                    src={learnItLogo}
                    alt='learnItLogo'
                    height='32'
                    width='32'
                    className='me-2'
                />
                LearnIt
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link
                        className='fw-bolder text-white'
                        to='/dashboard'
                        as={Link}
                    >
                        Dashboard
                    </Nav.Link>
                    <Nav.Link
                        className='fw-bolder text-white'
                        to='/about'
                        as={Link}
                    >
                        About
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className='fw-bolder text-white' disabled>
                        Welcome {username}
                    </Nav.Link>
                    <Button
                        variant='secondary'
                        className='fw-bolder text-white'
                        onClick={logout}
                    >
                        <img
                            src={logoutIcon}
                            alt='logoutIcon'
                            width='32'
                            height='32'
                            className='me-2'
                        />
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
