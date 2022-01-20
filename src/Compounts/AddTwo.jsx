import React,{useState, useEffect} from 'react'

function AddTwo() {
    const [num, setNum] = useState(0);
    
    useEffect(() => {
        console.log("Component Mounted");
    }, []);

    useEffect(() => {
        console.log("Number Updated");
    }, [num]);

    useEffect(() => {
        return () => console.log("Component Unmounted")
    });

    return (
        <>
            <h3 style={{
                color: "green",
                fontSize: "20px",
                backgroundColor: "yellow",
                }}
            >
                Welcome to Add 2
            </h3>
            <div>
                <h1 style={{ textAlign: "center", color: "red" }} >{num}</h1>
                <button onClick={() => setNum((prev) => prev+2)} >
                    Click me to Add 2
                </button>
            </div>
        </>
    )
}

export default AddTwo
