import user from '../model/user.js';
import User from '../model/user.js';


const addUser =  async (request, response) => {
    try{
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            console.log("user already exists.");
            response.status(200).json('user already exists.');
        }
        else {
            let newuser = new User(request.body);
            await newuser.save();
            console.log("new user added");
            response.status(200).json('new user added');
        }        
    }
    catch(error) {
        console.log("error while adding user to db: ", error.message);
        return;
    }
}

const getUsers = async (request, response) => {
    try {
        let users = await User.find({});
        response.status(200).json(users);
    }
    catch(error) {
        response.status(500).json("error while fetching users conversation");
    }
}

export {addUser, getUsers};