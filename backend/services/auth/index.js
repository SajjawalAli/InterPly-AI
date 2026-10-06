import express from "express"

const app = express()

const PORT = 6001

app.get("/", (req, res)=>{
    res.send("Hello from Auth service")
})

app.listen(PORT, ()=>{
    console.log(`Gateway started at ${PORT}`)
})