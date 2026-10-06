import express from "express"
import proxy from "express-http-proxy"


const app = express()

const PORT = process.env.PORT

app.get("/", (req, res)=>{
    res.send("Hello there")
})

app.use("/api/auth", proxy(process.env.AUTH_URL))

app.listen(PORT, ()=>{
    console.log(`Gateway started at ${PORT}`)
})