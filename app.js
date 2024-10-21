require("dotenv").config()

const express= require("express")
const app = express()
const PORT = 7000;

require('./dbconnection').connectionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router=require("./routers/userRoute")
app.use("/user",router)

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
});

