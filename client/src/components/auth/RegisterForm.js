import { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
    // Load register context
    const { registerUser } = useContext(AuthContext)

    // Local state
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [alert, setAlert] = useState(null)

    const { username, password, confirmPassword } = registerForm

    const onChangeRegisterForm = (event) =>
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value,
        })

    const register = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setAlert({ type: 'danger', message: 'Passwords do not match' })

            setTimeout(() => {
                setAlert(null)
            }, 3000)
        }

        try {
            const registerData = await registerUser(registerForm)
            if (!registerData.success) {
                setAlert({ type: 'danger', message: registerData.message })

                setTimeout(() => {
                    setAlert(null)
                }, 3000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form className='my-4' onSubmit={register}>
                <Form.Group className='mb-3'>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={username}
                        required
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        required
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={confirmPassword}
                        required
                        onChange={onChangeRegisterForm}
                    />
                </Form.Group>

                <AlertMessage info={alert} />

                <Button variant='success' type='submit'>
                    Register
                </Button>
            </Form>
            <p>
                Already have an account?
                <Link to='/login'>
                    <Button variant='primary' size='sm' className='ms-2'>
                        Login
                    </Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm
