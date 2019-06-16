import React from 'react'
import './navbutton.css'

const NavButton = ({buttonHandler, place, flag}) => {
    console.log(place, flag);
    return ( 
    //if global class matches local class (flag) --> display a highlighted color 
    flag ? 
    <button className="selected-nav-button" onClick={() => buttonHandler(place)}>{place}</button>
    :
    <button onClick={() => buttonHandler(place)}>{place}</button>

)}

export default NavButton; 
