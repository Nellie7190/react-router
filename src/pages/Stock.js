import React, { useState, useEffect } from "react";

const Stock = (props) => {

    //Grabbing the stock by filtering the symbol from data
    const stocks = props.stocks.filter( stock => stock.symbol === props.match.params.symbol)[0]

    //loaded function for when data is fetched
    const loaded = () => {

        return (
            <div>
                <h2>{stocks.symbol}</h2>
                <h2>
                    Name: {stocks.name}
                </h2>
                <h2>
                    Price: {stocks.lastPrice}
                </h2>
            </div>
        );
    };

    //Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>
    };


    //if stock has data, run the loaded function, otherwise, run loading
    return stocks ? loaded() : loading ();
};

export default Stock;



// import React from 'react'


// const Stock = (props) => {


//     //filter data by matching the symbol
//     const stock = props.stocks.filter( stock => stock.symbol === props.match.params.symbol)[0]
//     return (
//     //get the correct data from stock 
//         <div>
//         <h3>Name: {stock.name}</h3>
//         <h3>Price: {stock.lastPrice}</h3>
//         </div>
//   )
// }


// export default Stock