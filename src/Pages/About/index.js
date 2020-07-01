import React from "react";
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import "./style.css";
import image from "./profile-pic.jpeg";
import { Link } from "react-router-dom";

function About() {

    return (

        <PageWrapper>
            <PageHeader title="About" />
            <div className="row justify-content-center">
                <div className="card mb-3" id="about-card">
                    <div className="row no-gutters align-items-center" id="card-row">
                        <div className="col-md-4" id="profile-pic-column">
                            <img className="card-img" src={image} alt="profile of the author" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">Full-stack web developer. Richmond-raised Marine veteran. World traveller. Student of ancient languages.</h6>
                                <h6 className="card-title"><a className="profile-link" href="https://github.com/dmabell693" target="_blank" rel="noopener noreferrer">Github</a></h6>
                                <h6 className="card-title"><a className="profile-link" href="https://www.linkedin.com/in/daniel-abell-782350199/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h6>
                                <h6 className="card-title"><a className="profile-link" href="assets/images/Abell_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h6>
                                <h6 className="card-title">
                                    email: <Link className="profile-link" to="/contact">dmabell693@gmail.com</Link>
                                </h6>
                                <h6 className="card-title">cell: (804) 836-4095</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}


export default About;