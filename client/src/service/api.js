import axios from 'axios';

const url = "http://localhost:5000"

const addUser = async (data)=> {
    try{
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    }
    catch(error){
        console.log("error while adding user in axios post: ", error.message);
    }
}

const getUsers = async () => {
    try{
        let response = await axios.get(`${url}/users`);
        return response.data;
    }
    catch(error) {
        console.log("error while loading conversation users", error.message);
    }
}

export { addUser, getUsers};