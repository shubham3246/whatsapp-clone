import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

async function Connection() {
  const uri = `mongodb+srv://${username}:${password}@${username}.0njfqrp.mongodb.net/?retryWrites=true&w=majority`;
  const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("error while connecting to database: ", error.message);
  }
}

export default Connection;
