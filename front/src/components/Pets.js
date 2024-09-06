import React, { useState, useEffect } from "react";
import PetsTable from "./PetsTable";
import PetsService from "../services/pets.service";
import {logDOM} from "@testing-library/react";

const Pets = () => {

  const [petsData, setPetsData] =useState([]);
  const [petType, setPetType] =useState('all');

  function loadData(){
      PetsService.getPets(petType)
                 .then((response) => {
                  setPetsData(response.data);
                  },
                  (error) => {console.log(error)}
          ).catch(error => console.log(error));

  }


    useEffect(() => {
        loadData();
    }, []);

  return (
    <div className="container">
        <h3 className="center">Домашние Животные</h3>

        <PetsTable petsData={petsData}/>

    </div>
  );
};

export default Pets;
