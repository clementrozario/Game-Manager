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

app.put("/api/games",(req,res)=>{
    const newGame = req.body;
    games.push({...newGame,id:games.length+1});
    res.status(201).json(newGame);
})

app.listen(PORT,()=>{
    console.log(`server is listening to port:${PORT}`);
})