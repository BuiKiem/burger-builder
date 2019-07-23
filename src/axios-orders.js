import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-a92a4.firebaseio.com/",

});

export default instance;
