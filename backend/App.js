var express = require("express");
const cors = require("cors");
const {stderr} = require("process");

var mongoose = require('mongoose');
const Student = require("./models/Student");
// const Student = require("./models/Student");
var mongoDB = 'mongodb+srv://esalap00:3INgtx7KDMzkDB1I@cluster0.njt58.mongodb.net/test'

var db = mongoose.connection


var app= express();
app.use(express.json());
app.use(cors());


app.use("/api/users",require("./routes/users"));
app.use("/api/login",require("./routes/login"));
app.use("/api/note",require("./routes/note"));

// INSERT
// app.get('/create', async (req, res) => {
//     const student = new Student({ name: 'Esteban', surname: 'Salazar' });
//     try {
//         await student.save()
//         res.send('OK')
//     } catch (err) {
//         res.send(err)
//     }
// })


app.listen(5000,function(req,res){
    console.log("Listen 5000\n");
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
});

