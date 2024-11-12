import React from "react";

function Item({item, removeItem}){
    return(
        <li>
       <p className="d-inline-block me-3 text-primary">{item}</p> 
        <button onClick={()=>removeItem(item)} className="btn btn-sm btn-info">Delete</button>
        </li>
    );
}

export default Item