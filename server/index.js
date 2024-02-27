import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import {createServer} from 'http';
import {Server} from 'socket.io';
import Routes from './routes/route.js';
import Connection from "./database/db.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors:{
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true
  }
});

let users = [];

io.on("connection", (socket)=>{
  console.log("user connected");

  //connect
  socket.on("addUser", userData => {
      addUser(userData, socket.id);
      io.emit("getUsers", users);
  });

  //send message
  socket.on('sendMessage', (data) => {
      const user = getUser(data.receiverId);
      io.to(user.socketId).emit('getMessage', data)
  });


  //disconnect
  // socket.on('disconnect', () => {
  //     console.log('user disconnected');
  //     removeUser(socket.id);
  //     io.emit('getUsers', users);
  // })
});

const PORT = 5000;
server.listen(PORT, ()=>console.log("node running successfully on port :", PORT));
Connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: ["POST", "GET"],
  credentials: true,
}));
app.use('/', Routes);


// socket



// server.listen(9000, () => {
//   console.log('Socket is running on port 9000');
// });

const addUser = (userData, socketId) => {
  !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
  users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
  return users.find(user => user.sub === userId);
}



