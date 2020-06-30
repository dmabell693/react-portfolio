import React from "react";
import emailjs from 'emailjs-com';
import "./style.css";

function ContactForm() {

    // function sendEmail(event) {
    //     event.preventDefault();

    //     emailjs.sendForm("portfolio_email", "portfolio_form", event.target, "user_gkObLKxJOdIrGMDWIlgH9")
    //         .then((res) => {
    //             console.log(res.text);
    //         }, (err) => {
    //             console.log(err.text);
    //         });
    // }

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

        // <form>
        //     <div className="form-group contact-form" onSubmit={sendEmail}>
        //         <input type="hidden" name="contact_number" />
        //         <label htmlFor="nameBox">Name</label>
        //         <input type="text" name="user_name" className="form-control" id="nameBox" placeholder="your name" />
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="emailBox">Email</label>
        //         <input type="email" name="user_email" className="form-control" id="emailBox" placeholder="youremail@example.com" aria-describedby="emailHelp" />
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="messageBox">Message</label>
        //         <textarea name="message" className="form-control" id="messageBox" rows="3"></textarea>
        //     </div>
        //     <input type="submit" value="Send" className="btn" id="submitButton" />
        // </form>
    )
}


export default ContactForm;