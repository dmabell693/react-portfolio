import React from "react";
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

function Contact() {

    return (
        <PageWrapper>
            <PageHeader title="Contact" />
            <ContactForm />
        </PageWrapper>
    )
}

export default Contact;