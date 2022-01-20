import React from "react";
import Details from "./Details";

function ContactPage() {
    return (
        <>
            <h3 style={{
                color: "green",
                fontSize: "20px",
                backgroundColor: "yellow",
                }}
            >
                Welcome to Contact Page
            </h3>
            <Details name="jagan.msjc@gmail.com" contact="9385304351" />
        </>
    );
}

export default ContactPage;