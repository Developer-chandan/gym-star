import React, { useEffect, useState } from 'react';
import "./showcase.css";
import DashBoard from '../DashBoard/Dashboard';
import Persons from '../Person/Persons';



const Showcase = () => {

    const [persons, setPersons] = useState([]);  
    const[netAsset, setNetAsset]= useState([]);

    useEffect(() =>{
      fetch("./info.JSON")
      .then(res => res.json())
      .then(data => setPersons(data))
    }, [])



    const netAssetAdd = (persons) => {
      const anotherPerson = [...netAsset, persons];
      setNetAsset(anotherPerson);
  }

    return(
  <div className="gStore-data">
        <div className="product-showcase">
      
       {
           persons.map(person => <Persons
             person={person}
             key={person.key}
             netAssetAdd={netAssetAdd}
           ></Persons>)
         
        }
      
        </div>

        <div className="cart">
          <DashBoard netAsset={netAsset}></DashBoard>
        </div>
  </div>
    );
};

export default Showcase;