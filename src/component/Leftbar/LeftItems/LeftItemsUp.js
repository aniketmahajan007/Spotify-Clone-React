import React from "react";
import './LeftItems.css';

function LeftItemsUp({title, Icon}){
    return(
        <div className="LeftItems">
            {Icon && <Icon />}
            {Icon ? <h4>{title}</h4> :  <p>{title}</p>}
        </div>
    );
}
export default LeftItemsUp;
