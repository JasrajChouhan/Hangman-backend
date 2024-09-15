import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import data from './data.js'
dotenv.config()
const app = express()

const port = process.env.PORT || 3000;

const frontendUrl = process.env.FRONTEND_URL || ""
const frontendUrlPlay = process.env.FRONTEND_URL_PLAY ;

const isProduction = process.env.NODE_ENV === 'production'

app.use(cors({
    origin: isProduction ? [frontendUrl , frontendUrlPlay] : ['http://localhost:5173/' , 'http://localhost:5173/play']
}));

app.get('/', (req, res) => {
    res.send(data)
})

// hello world

app.listen(port, () => {
    console.log(`at port ${port}`)
})