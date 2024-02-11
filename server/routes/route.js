import express from 'express';
import {addUser, getUsers} from '../controllers/user-controller.js';
import { newConversation, getConversation } from '../controllers/conversation-controller.js';
import { newMessage, getMessage }from '../controllers/message-controller.js';
import { uploadImage, getImage } from '../controllers/image-controller.js';

import upload from '../utils/upload.js';


const route = express.Router();
route.post("/add", addUser);
route.get("/users", getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);

export default route;