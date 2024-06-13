import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contactMain">
        <ContactInfo />
        <ContactForm />
    </div>
  )
}
