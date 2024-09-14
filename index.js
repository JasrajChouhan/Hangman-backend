import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import data from './data.js'
dotenv.config()
const app = express()

const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send(data)
})

// hello world

app.listen(port, () => {
    console.log(`at port ${port}`)
})