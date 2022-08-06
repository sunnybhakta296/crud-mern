const express=require("express")
const mongoose=require("mongoose")
const routes=require("./routes")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/usersdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db=mongoose.connection
db.on("error", ()=>{
    console.log(`Connection eroor`)
})
db.once("open",()=>{
    console.log("db connected")
    app.use(routes)
})


const port=3001
app.listen(port,()=>{
    console.log(`App started at port 3001`)
})