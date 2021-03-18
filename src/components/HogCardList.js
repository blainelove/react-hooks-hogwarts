import React, {useState} from "react";
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
function HogCardList(props){
    const [hogs, setHogs] = useState(props.hogs)
    

    const hogCardList = hogs.map((hog) => {
        return <HogCard 
        key ={hog.name} 
        name={hog.name} 
        specialty={hog.specialty}
         />;
    });
    return(
        <>
        <h1> hogslist </h1>
        {hogCardList}
        </>
    );
}

export default HogCardList;