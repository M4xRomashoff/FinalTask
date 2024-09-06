import axios from "axios";

const API_URL = "http://localhost:5000/";


const getPets = (petType) => {
  return axios.get(API_URL + "pets", { params: { petType } });
};



const PetsService = {

  getPets,

}

export default PetsService;
