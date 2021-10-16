import React from "react";
import stocks from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return(
        <div>
            <h1>This is my Dashboard page</h1>
            {stocks.map((stock) => {
                const {name, symbol, lastPrice} = stock;

                return(
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    );
};

export default Dashboard;