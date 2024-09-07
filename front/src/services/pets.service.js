import axios from "axios";

const API_URL = "http://localhost:5000/";


const getPets = (petType) => {
  return axios.get(API_URL + "pets", { params: { petType } });
};

const savePet = (petType, name, dob, color, actions) => {
  return axios.post(API_URL + "savePet", { petType, name, dob, color, actions  });
};

const deletePet = (id) => {
  return axios.post(API_URL + "deletePet", { id });
};


const PetsService = {

  getPets,
  savePet,
  deletePet,

}

export default PetsService;
