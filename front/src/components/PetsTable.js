import React, {useEffect, useState, useRef} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import PetsService from "../services/pets.service";



function prepareData(petsData){

    console.log('petsData',petsData);

    let newData = [];
    if (petsData && petsData.length >0){
        petsData?.map(item =>{
            newData.push(
                {
                   name:item.name,
                   type: item.type,
                   dob: item?.birth,
                   color: item.color,
                   actions: item.actions,
                   id: item.id,
                }
            )
        })
    }

    return newData;
}

export default function PetsTable({petsData, loadData}) {

    const [rows, setRows] = useState([]);


    useEffect(() => {
        setRows(prepareData(petsData));
    }, [petsData]);


    function handleDelete(id){
        PetsService.deletePet(id)
            .then((response) => {
                    window.alert(response?.data);
                    loadData();
                },
                (error) => {window.alert(error.message);}
            ).catch(error => window.alert(error.message));

    }



    return (<>

        <TableContainer component={Paper} sx={{  mx: 'auto', width: 1000 }}>
                    <Table  className="table" aria-label="pets table">
                        <TableHead className="tableHeader" >
                            <TableRow>
                                <TableCell>Кличка Животного</TableCell>
                                <TableCell align="right">Тип</TableCell>
                                <TableCell align="right">Дата рождения</TableCell>
                                <TableCell align="right">Цвет</TableCell>
                                <TableCell align="right">Что делает</TableCell>
                                <TableCell align="right">Удалить</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                        {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                                    <TableCell align="right">{row.dob}</TableCell>
                                    <TableCell align="right">{row.color}</TableCell>
                                    <TableCell align="right">{row.actions}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="error" onClick={() =>handleDelete(row.id)}>
                                            Х
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
            </TableContainer>
        </>

    );
}
