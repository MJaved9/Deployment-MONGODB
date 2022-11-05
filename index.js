const express=require("express")
require("dotenv").config()
const { connection } = require("./Config/db")
const { topicControler } = require("./Routes/topic.routes")
const {studentControler}=require("./Routes/student.routes")
const port=process.env.port||8080

const app=express()
app.use(express.json())



app.use("/topic",topicControler)

app.use("/student",studentControler)

app.listen(port,async()=>{
    try{
        await connection
        console.log("Connect to db")
    }
    catch(err){
        console.log("Error in DB")
        console.log(err)
    }
    console.log(`Server STrat ${port}`)
})