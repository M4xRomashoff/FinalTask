import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import PetsService from "../services/pets.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const petTypes = [
    {
        value: 'cat',
        label: 'Кошки',
    },
    {
        value: 'dog',
        label: 'Собаки',
    },
    {
        value: 'hamster',
        label: 'Хомяки',
    },
];

export default function AddModal({addModal, setAddModal, loadData}) {

    const [pType, setPType] = useState('cat');
    const [name, setName] = useState('Мурзик');
    const [dob,setDob] = useState("2024-02-02");
    const [color,setColor] = useState("Коричневый");
    const [actions,setActions] = useState("есть, бегать, прыгать");

    const handleClose = () => setAddModal(false);

    const handleSave = () => {
        console.log('save', pType, name, dob, color, actions)
        saveData();
        setAddModal(false);
    };

    const handleCancel = () => {
        setAddModal(false);
    };


    function saveData(){

        PetsService.savePet(pType, name, dob, color, actions)
            .then((response) => {
                    window.alert(response?.data);
                    loadData();
                },
                (error) => {window.alert(error.message);}
            ).catch(error => window.alert(error.message));

    }

    return (
        <div>
            <Modal
                open={addModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={style}
                    noValidate
                    autoComplete="off"
                >
                    <h3> Добавить Животное</h3>


                    <Stack direction="column" spacing={3} sx={{  mx: 'auto', width: 300, }} >

                        <TextField
                            id="petType"
                            select
                            label="Вид Животинки"
                            defaultValue="cat"
                            helperText="Виберите вид"
                            value={pType}
                            onChange={(e)=>setPType(e.target.value)}

                        >
                            {petTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="name"
                            label="Кличка"
                            variant="filled"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />

                        <TextField
                            id="dob"
                            label="Дата Рождения в формате: 2024-1-1"
                            defaultValue="2024-02-02"
                            variant="filled"
                            value={dob}
                            onChange={(e)=>setDob(e.target.value)}
                        />

                        <TextField
                            id="color"
                            label="Окрас"
                            defaultValue="Черный"
                            variant="filled"
                            value={color}
                            onChange={(e)=>setColor(e.target.value)}
                        />

                        <TextField
                            id="actions"
                            label="Действия"
                            defaultValue="кушать, бегать, "
                            variant="filled"
                            value={actions}
                            onChange={(e)=>setActions(e.target.value)}
                        />

                        <Stack direction="row" spacing={2} sx={{  mx: 'auto', width: 800, pt: '10px' , pb: '10px' }} >

                            <Button variant="contained" color="success" onClick={handleSave}>Добавить</Button>
                            <Button variant="contained" color="warning" onClick={handleCancel}>Отмена</Button>


                        </Stack>
                    </Stack>



                </Box>
            </Modal>
        </div>
    );
}
