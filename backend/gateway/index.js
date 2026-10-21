import express from "express"
import proxy from "express-http-proxy"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

app.use(morgan("dev"))
app.use(cookieParser())

const PORT = process.env.PORT

app.get("/", (req, res)=>{
    res.send("Hello there")
})

app.use("/api/auth", proxy(process.env.AUTH_URL))

app.listen(PORT, ()=>{
    console.log(`Gateway started at ${PORT}`)
})