import React, { useState, useEffect } from "react";
//import stocks from "../data.json";

const Stock = (props) => {

    //Grabbing the stock symbol from data
    const symbol = props.match.params.symbol;

    //const url = stocks.symbol
    
    //state to hold the stock data
    const [stock, setStock] = useState(null);

    //function to fetch stock data
    const getStock = async () => {
        const response = await fetch(symbol);
        const data = await response;
        setStock(data);
    };

    //useEffect to run getStock when component mounts
    useEffect(() => {
        getStock();
    }, []);

    //loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h2>{stock.symbol}</h2>
                <h2>
                    Name: {stock.name}
                </h2>
                <h2>
                    Price: {stock.lastPrice}
                </h2>
            </div>
        );
    };

    //Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>
    };


    //if stock has data, run the loaded function, otherwise, run loading
    return stock ? loaded() : loading ();
};

export default Stock;