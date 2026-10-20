import express from "express"
import { connectDb } from "./configs/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

const app = express()

const PORT = process.env.PORT || 6001

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res)=>{
    res.send("Hello from Auth service")
})

app.use("/", authRouter)

app.listen(PORT, ()=>{
    console.log(`Gateway started at ${PORT}`)
    connectDb()
})

