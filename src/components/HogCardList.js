import React from "react";
import HogCard from './HogCard'

const hogs = ['Babe', 
'Porkchop', 
'Cherub', 
'Piggy smalls', 
'Trouble', 
'Piglet', 
'Peppa', 
'Truffle Shuffle', 
'Bailey', 
'Galaxy Note', 
'Leggo My Eggo', 
'Augustus Gloop'
];
function HogCardList(){
    const hogcardlist = hogs.map((hog) => {
        return <HogCard key = {hog} name = {hog} />;
    });
    return(
        <>
        <h1> hogslist </h1>
        {hogcardlist}
        </>
    );
}

export default HogCardList;