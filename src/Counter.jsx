import { useState } from "react";
import "./Counter.css";
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>


export default function Counter () {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("0");
    function onTextChange (event) {
        setValue(event.target.value);
        console.log("This function is called!" + event.target.value);
        console.error("Error");
    }

    return (

        <>
        <center>

            <input  value={value} onChange={(event) => onTextChange(event)} className="type"/>

            <div className="blaaa">
                <ul>
                    <li>{value} Celcius to {value*1.8+32} Farenheit</li>
                    <li>{value} Kilometer {value*1000} Meter</li>
                    <li>{value} Baht {value*0.031} Dollors</li>
                </ul>
            </div>
            <h1 className="cha">You have written {value.length} characters</h1>
            

            <br/>
            <hr></hr>

            <span>
                <button onClick={() => setCount(count + 1)}>
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
            </span>
           
            <h1 className="click">You have clicked {count} times.</h1>

        </center>
        
        </>
    );
}