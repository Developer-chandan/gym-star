import React from 'react';
import "./dashboard.css"



const DashBoard = (props) => {
    const { netAsset } = props;
    let persons = 0;
    let personsAsset = 0;
    for (const asset of netAsset) {
        if (!asset.assetAmount) {
            asset.assetAmount = 1;
        }
        personsAsset = personsAsset + parseFloat(asset.netWorth) * asset.assetAmount;
        persons = persons + asset.assetAmount;
    }

    return (
        <div className="dashboard-content">     
         <h1>Net Assets of Them</h1>
          <h3>Number Of Person: {persons}</h3>
          <h3>Net Assets: ${personsAsset.toFixed(2)} B.</h3>
        </div>
    );
};

export default DashBoard;