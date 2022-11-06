import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className="header">
            <h2>Notes</h2>
            <button className="save" onClick={()=>handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Note</button>
        </div>
    )
}
export default Header;