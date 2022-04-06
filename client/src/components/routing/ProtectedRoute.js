import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'
import { NavbarMenu } from '../layout/NavbarMenu'

const ProtectedRoute = () => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext)

    if (authLoading)
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )

    if (!isAuthenticated) return <Navigate to='/login' />
    return (
        <>
            <NavbarMenu />
            <Outlet />
        </>
    )
}

export default ProtectedRoute
