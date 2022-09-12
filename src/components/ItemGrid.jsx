import React from "react";
import { useQuery, gql } from '@apollo/client';
import Item from "./Item"; 
var numberToWords = require('number-to-words');
const GET_ITEMS = gql`
  query Items {
    items {
      image
      title
      description
      price
    }
  }
`
//Generates a list of 9 items from the backend
function getItemList(items) {
    let item_list = []
    for (let i = 0; i < 9; i++) {
        //If item is populated
        if (i < items.length) {
            //push a populated item
            item_list.push(
                    <Item 
                    img={items[i].image}
                    imgDescription=""
                    pirce={items[i].price}
                    itemDescription = {items[i].description}
                    itemName={items[i].title}/>
                )
        } else {
            //Otherwise, push an empty item to be put into the grid
            item_list.push(
                <Item 
                img= ""
                imgDescription= ""
                pirce= {null}
                itemDescription = ""
                itemName= ""
                />
            )

        }
    }

    return item_list;
}

function ItemGrid() {
    //UseQuery Hook, you pass a query to it and it'll use your client to run it
    const { loading, error, data } = useQuery(GET_ITEMS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    //Get list of Item components
    let item_list = getItemList(data.items);

    //Wrap the items into a grid wrapper
    return (
        <div className = "grid-wrapper">
            {item_list.map((item, index) => {
                return (
                <div className = {numberToWords.toWords(index + 1)}>
                    {item}
                </div>
                )
            })
        }
        </div>
    );
  }

export default ItemGrid;