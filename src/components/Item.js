import React from "react";
// import { u } from "tar";

function Item({ item, onUpdateItem, onDeleteItem}) {
  function handleDelete (){
    fetch (`http://localhost:4000/items/${item.id}` , {
      method : 'DELETE'
    })
    
    .then ((r) => r.json())
    .then (() => onDeleteItem(item))
    
  }
  function handleAddTOCart (){ 

fetch ( `http://localhost:4000/items/${item.id}`,{
  method : 'PATCH',
  headers: {
    'Content-TYpe' : 'application/json'
  },
  body: JSON.stringify({
    isInCart: !item.isInCart,
  })
})
  .then ((r) => r.json())
  .then ((updatedItem) => onUpdateItem(updatedItem))
}



  

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      < button 
      className={item.isInCart ? "remove" : "add"} 
      onClick={handleAddTOCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
