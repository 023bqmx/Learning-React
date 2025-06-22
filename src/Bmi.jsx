import { useState,useRef } from "react";
import "./Bmi.css"

function BmiText({bmi}) {
    if (bmi <18.5)
        return (
            <>
            <h1>Underweight</h1>
            <img src="คนผอมมาก.png" className="oun"></img>
            </>
    );
    if (bmi >30)
        return (
            <>
            <h1>Overweight</h1>
            <img src="อ้วน.png" className="oun"></img>
            </>
    );
    return (<>
    <h1>Normal</h1>
    <img src="คนผอม.png" className="oun"></img>
    </>);
}

export default function Bmi() {
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi , setBmi]=useState(0);
    
    function calBmi () {
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi(w/(h*h));
    }

    return (
        <>
            
            <h1>BMI CALCULATOR</h1> {/* แก้ไขสะกดเป็น CALCULATOR ให้ถูกต้อง */}
            {/* โครงสร้างใหม่สำหรับ Weight */}
            <div className="input-group">
                <label htmlFor="weight-input">Weight</label> 
                <div className="input-container"> {/* เพิ่ม div นี้สำหรับกรอบเรืองแสง */}
                    <input 
                        id="weight-input" 
                        ref={w_inputRef} 
                        type="number" /* แนะนำให้ใช้ type="number" สำหรับค่าตัวเลข */
                        placeholder="Enter weight" 
                    /> 
                </div>
                <span>kg.</span>
            </div>
            
            {/* โครงสร้างใหม่สำหรับ Height */}
            <div className="input-group">
                <label htmlFor="height-input">Height</label> 
                <div className="input-container"> {/* เพิ่ม div นี้สำหรับกรอบเรืองแสง */}
                    <input 
                        id="height-input" 
                        ref={h_inputRef} 
                        type="number" /* แนะนำให้ใช้ type="number" สำหรับค่าตัวเลข */
                        placeholder="Enter height" 
                    /> 
                </div>
                <span>cm.</span>
            </div>
            
            <button onClick={calBmi}>Calculate!</button>
            
            {/* ส่วนแสดงผล BMI ที่อยู่ภายใน BmiText */}
            <div className="BmiText">
                <h1>Bmi : {bmi.toFixed(2)}</h1>
                <BmiText bmi={bmi}/>
            </div>
           
        </>
    );

}