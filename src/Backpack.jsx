import "./Backpack.css";
import { useState } from "react";

function Item({name}) {
    const [pack,setPack]=useState(0);
    const [pack1,setPack1]=useState(0);
    
    function Randomdice () {
        let num=Math.round(Math.random()*6) + 1;
        setPack(num);
    }

    if (pack%4 == 0)
        return (<li onClick={Randomdice}>{name}⚀</li>);
    if (pack%4 == 1)
        return (<li onClick={Randomdice}>{name}⚁</li>);
    if (pack%4 == 2)
        return (<li onClick={Randomdice}>{name}⚂</li>);
    if (pack%4 == 3)
        return (<li onClick={Randomdice}>{name}⚃</li>);
    if (pack%4 == 4)
        return (<li onClick={Randomdice}>{name}⚄</li>);
    if (pack%4 == 5)
        return (<li onClick={Randomdice}>{name}⚅</li>);
}

export default function Backpack () {
    const items = ["Players" , "Bankers"];
    const filterList = items.filter(i=>i.includes("l"));

    return (
        <>
            <h1 className="title">Cyberpunk.Bet 🃏</h1>

            <hr></hr>

            <p className="bettitle">YOU CAN CLICK THIS TO BET!</p>

            <ol>
                    {filterList.map(i=><Item name ={i})/>)}
            </ol>

        </>
    );
}