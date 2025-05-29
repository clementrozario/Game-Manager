import express from 'express';
import cors from 'cors';
import { games } from './Fake.js' 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/api/games",(req,res)=>{
    res.json(games);
})

app.listen(PORT,()=>{
    console.log(`server is listening to port:${PORT}`);
})