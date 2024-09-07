import React, {useState, useEffect, useRef} from "react";
import PetsTable from "./PetsTable";
import PetsService from "../services/pets.service";

import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import AddModal from "./AddModal";

const Pets = () => {

  const [petsData, setPetsData] =useState(null);
  const [openAdd, setOpenAdd] =useState(false);
  const petTypeRef = useRef('all');

  function loadData(petType){

      let pType = petType;
      if(!pType) pType = petTypeRef.current;

      setPetsData(null);

      PetsService.getPets(pType)
                 .then((response) => {
                  setPetsData(response.data);
                  },
                  (error) => {console.log(error)}
          ).catch(error => console.log(error));

  }


    useEffect(() => {
        loadData('all');
    }, []);


    const handleAdd = () => {
       setOpenAdd(true);
    };

    const handleSort = (sort) => {
        petTypeRef.current = sort;
        console.log('sort', sort);
        loadData(sort);
    };

  return (
    <div className="container">

        {openAdd && (<AddModal addModal={openAdd} setAddModal={setOpenAdd} loadData={loadData}/>)}

        <h3 className="center">Домашние Животные</h3>

        <Stack direction="row" spacing={2} sx={{  mx: 'auto', width: 800, pt: '10px' , pb: '10px' }} >

            <Button variant="contained" color="secondary" onClick={()=>handleSort('all')}>Все</Button>
            <Button variant="contained" color="secondary" onClick={()=>handleSort('cat')}>Кошки</Button>
            <Button variant="contained" color="secondary" onClick={()=>handleSort('dog')}>Собаки</Button>
            <Button variant="contained" color="secondary" onClick={()=>handleSort('hamster')}>Хомяки</Button>

        </Stack>


        {petsData && (<PetsTable petsData={petsData} loadData={loadData}/>)}

        <Stack direction="row" spacing={2} sx={{  mx: 'auto', width: 800, pt: '10px' }} >

            <Button variant="contained" color="success" onClick={handleAdd}>Добавить Животинку</Button>


        </Stack>




    </div>
  );
};

export default Pets;
