import React from 'react';
import "./person.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';



const Persons = (props) => {
   
    const {title, country, brand, netWorth, image, Age} = props.person;
    return (
        <div className="single-person">
            <div className="person-img">
                <img src={image} alt="" />
            </div>
            <div className="signgle-item-content">
                <h2 className="name">{title}</h2>
                <h3>Age: {Age}</h3>
                <h2>Net Asset: ${netWorth} B.</h2>
                <p>Country: {country}</p>
                <p>Brand: {brand}</p>
               
            </div>
            <div className="buttons">
                    <button href="#"
                    className="assets-btn" 
                    
                    onClick={() => props.netAssetAdd(props.person)}
                    // <i class="fas fa-dollar-sign"></i>
                    > <FontAwesomeIcon icon={faDollarSign} /> Total Assets</button>
            </div>
        </div>
    );
};

export default Persons;