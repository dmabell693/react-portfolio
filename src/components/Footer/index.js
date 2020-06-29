import React from "react";
import "./style.css";

function Footer(props) {

    return (

        <footer className="fixed-bottom text-center">
            {props.children}
        </footer>
    )
}


export default Footer;