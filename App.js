const express = require("express");
var cors = require ("cors");
const mongoose =require("mongoose");
const USER_MODEL = require("./API/Modols/user.modol");

const app = express();
app.use(express.json());
app.use(cors());
const mongooseURL= "mongodb+srv://mohmmad:123456780@cluster0.vw6szef.mongodb.net/"

mongoose.connect(mongooseURL);
mongoose.connection.on("connected" , () => {

    console.log("mongo connected");
})


app.get("/app" , (req, res)=>{

    res.status(200).json({
        name:"mohamd",
        city:"Arrba",


    });
});
app.post("/mohamd" ,(req , res) => {
    const { name , lastname }= req.bady;
    if(!name || !lastname){
        res.status(703).json({
            error:true,
            errorMessage:"name and lastname are MUST!",
        });
        return;
    }

    res.status(200).json({
        fullName:name +" "+lastname,
    });
} );
app.post("/createNewUser", (req, res) => {
    const { name, phone, points } = req.body;
  
    USER_MODEL.create({
      name: name,
      phone: phone,
      points: points,
    })
      .then((createRes) => {
        res.status(200).json({ user: createRes._doc });
      })
      .catch((e) =>
        res.status(500).json({ error: true, errorMessage: e.message })
      );
      
  });
  app.post("/login" , (req, res) => {

  }

  )



module.exports = app