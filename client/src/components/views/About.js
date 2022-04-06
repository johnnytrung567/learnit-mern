import React from 'react'
import { Card, Button } from 'react-bootstrap'
import avatar from '../../assets/avatar.png'

const About = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={avatar} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default About
