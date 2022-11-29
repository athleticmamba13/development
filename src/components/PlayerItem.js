// TODO: create a component that displays a single bakery item
import "./PlayerItem.css";
import React, { useState, useEffect } from 'react';

export default function PlayerItem(props) {
    
    const [favStr, setFavStr] = useState("");
    useEffect(() => {
        if (props.favorites.includes(props.item.name)) {
            setFavStr("Remove from Favorites")
        } else {
            setFavStr("Add to Favorites")
        }
      });

    function addToCart() {
        let newFavorites = props.filteredData
        if (props.favorites.includes(props.item.name)) {
            //remove from favorites
            console.log(props.favorites)
            props.favorites.splice(props.favorites.indexOf(props.item.name), 1)
            //set favorites to array with removed player name
            console.log(props.favorites)
            props.setFavorites(props.favorites)
            setFavStr("Add to Favorites")
            props.forceUpdate()
        } else {
            console.log(props.favorites)
            props.setFavorites([...props.favorites, props.item.name])
            //add to favorites
            setFavStr("Remove from Favorites")
            props.forceUpdate()
        }
    }

    return (
        <div id='bakery' class="bakery-item">
            <img class='item-img' src={"/images/steph.png"} alt={"Curry"} ></img>
            <div class='item-desc'>
                <h3>{props.item.name}</h3>
                <p>{props.item.position}</p>
                <h5>Per Game Stats</h5>
                <p>Points: {props.item.PPG}</p>
                <p>Rebounds: {props.item.RPG}</p>
                <p>Assists: {props.item.APG}</p>
                <p>Steals: {props.item.SPG}</p>
                <p>Blocks: {props.item.BPG}</p>
                <p>Turnovers: {props.item.TPG}</p>
                <p>+/-: {props.item.PM}</p>
                <div class="price-cart">
                    {/* <p>${props.price}</p> */}
                    <button onClick={addToCart}>{favStr}</button>
                </div>
            </div>
        </div>
      );
}