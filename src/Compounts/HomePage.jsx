import React from "react";
import Details from "./Details";

function HomePage() {

    return (
        <>
            <h3 style={{
                color: "green",
                fontSize: "20px",
                backgroundColor: "yellow",
                }}
            >
                Welcome to Home Page
            </h3>
            <Details name="Jaganath M S" contact="2001" /><br />
        </>
    );
}

export default HomePage;