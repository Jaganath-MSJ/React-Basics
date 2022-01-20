import React from 'react'

function Details(props) {
    return (
        <>
            <h1 style={{ textAlign: "center" }} >{props.name} <br /> {props.contact}</h1>
        </>
    )
}

export default Details
