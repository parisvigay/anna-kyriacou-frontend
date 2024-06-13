import { Form } from 'react-bootstrap';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <Form>
        <Form.Group className="formGroup" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control className="input" type="text" placeholder="Your full name" />
        </Form.Group>
        <Form.Group className="formGroup" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="input" type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="formGroup">
            <Form.Label>Your message</Form.Label>
            {/* <Form.Control className="input textArea" /> */}
            <Form.Control className="textArea" as="textarea" aria-label="With textarea" />
        </Form.Group>
        <div className="contactSubmitBtn">Submit</div>
    </Form>
  )
}