import express from 'express';
import "dotenv/config";
import mongoose from 'mongoose';
import cors from 'cors';
import { userRouter } from './routes/userRoute';

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`[DATABSE] MongoDBSoBook is connected`);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json("Welcome to SoBook"); 
});

app.use('/user', userRouter )


app.listen(port, () =>
console.log(`[SERVER] listening at http://localhost:${port}`)
);