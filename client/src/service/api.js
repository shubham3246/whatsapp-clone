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

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}


export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export { addUser, getUsers};