import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const port = process.env.PORT || 3000 ;

app.get('/' , (req , res) => {
    res.send(data)
})

// hello world

app.listen(port , () => {
    console.log(`at port ${port}`)
})