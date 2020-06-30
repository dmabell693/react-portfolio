import React from "react";
import emailjs from 'emailjs-com';
import "./style.css";

function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('portfolio_email', 'portfolio_form', e.target, 'user_gkObLKxJOdIrGMDWIlgH9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (

        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label className="mb-0">Name</label>
            <input className="form-control mb-4" type="text" name="user_name" />
            <label className="mb-0">Email</label>
            <input className="form-control mb-4" type="email" name="user_email" />
            <label className="mb-0">Message</label>
            <textarea className="form-control mb-4" name="message" />
            <input className="btn" id="submitButton" type="submit" value="Send" />
        </form>
    )
}


export default ContactForm;