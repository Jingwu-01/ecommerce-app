import React from "react";

function Item (props) {
    return (
        <div id="itembox"> 
            <div id="top-box">
                <img id="item-img" src={props.img} alt={props.imgDescription} />
                <div id="topright-box">
                    <p id="item-price">{props.pirce}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <hr />
            <div id="middle-box">
                <p id="item-description">{props.itemDescription}</p>
            </div>
            <hr />
            <h1 id="item-title">{props.itemName}</h1>
        </div>
    )
}

export default Item; 