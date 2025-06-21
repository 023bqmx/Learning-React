import { use } from "react";
import { useState } from "react";
import "./Counter.css";


export default function Counter () {
    const [count,setCount]=useState(0);

    return (

        <>
        <center>
            <button onClick={() => setCount(count + 1)} className="tood">
                Click me to add number
            </button>

            <br></br>

            <button onClick={() => setCount(count - 1)}>
                Click Me to subtrack number
            </button>

            <br></br>

            <button onClick={() => setCount(count => 0)}>
                Click Me to reset number
            </button>
           
           <h1>You clicked {count} times.</h1>

        </center>
        
        </>
    );
}