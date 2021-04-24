import React from 'react'
import "../styles/Header.css" 

function Header( {title} ) {
    
    return(
        <>
            <h1>
                {title}
            </h1>
        </>
    );
}

export default Header;
