import React from "react";
import "./style.css";

function ContactForm() {

    return (

        <form>
            <div className="form-group">
                <label for="nameBox">Name</label>
                <input type="text" className="form-control" id="nameBox" placeholder="John Smith" />
            </div>
            <div className="form-group">
                <label for="emailBox">Email</label>
                <input type="email" className="form-control" id="emailBox" placeholder="example@gmail.com"
                    aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="messageBox">Message</label>
                <textarea className="form-control" id="messageBox" rows="3"></textarea>
            </div>
            <button type="submit" className="btn" id="submitButton">Submit</button>
        </form>
    )
}


export default ContactForm;