import React from "react";
import stocks from '../data.json'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    
    return(
        <div>
            <h1>This is my Dashboard page</h1>
            {stocks.map((stock) => {
                const {name, symbol} = stock;

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