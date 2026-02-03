import express from 'express'
import cors from 'cors'
import { Employee } from './models/Schema.js'

const app = express()
const port = 5001

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
}));

app.use(express.json())

const names = ["Harry", "Chirag", "Aman", "Rohit", "Neha", "Priya", "Kunal", "Sneha", "Arjun", "Simran"]
// salary 300000 to 9000000
const lang = ["JavaScript", "Python", "Java", "C++", "Go", "Rust", "TypeScript"]
const cities = ["New York", "London", "Berlin", "Tokyo", "Bangalore", "Delhi", "Toronto"]
const bool = [true, false];

const random = (min,max)=>{
    return Math.floor(Math.random() * (max-min+1))+min
}

app
    .get('/', (req, res) => {
        res.send('Hello World!')
    })
    .get('/api/employees', async(req, res) => {
        const details = await Employee.find({})
        res.json(details)
    })


    .post('/api/generate', async (req, res) => {
        if((await Employee.find()).length!=0){
            await Employee.deleteMany({});
        }
        else{
            for(let i=1;i<=10;i++){
                await Employee.create({
                    name:names[random(0,names.length-1)],
                    salary:random(80000,200000),
                    language:lang[random(0,lang.length-1)],
                    city:cities[random(0,cities.length-1)],
                    isManager:bool[random(0,1)]
                })
            }
        }
        res.json({
            message:"Employee data created",
        })
    })

    .listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
