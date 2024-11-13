import Item from './Item.jsx';
import React from 'react';

function ItemList({items,removeItem}){
    return(
        <>
    <div className="container">
      <div className="border border-2 w-50 ">
        <h5 className="text-left mt-2">Items List</h5>
        <ul>
            {items.map((item,index)=>(
               <Item key={index}  item={item}   removeItem={removeItem}   /> 
            )
            )}
        </ul>
      </div>
     </div>
        
        </>
    );
}

export default ItemList