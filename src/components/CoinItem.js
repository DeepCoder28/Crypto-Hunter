import React from "react";
import "./Coins.css";

const CoinItem = ({ coin }) => {
  return (
    <div className="coin-row">
      <p>{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={coin.image} alt="" />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>&#x20B9;{coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">
        &#x20B9;{coin.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile">&#x20B9;{coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
