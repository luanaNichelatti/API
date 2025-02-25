const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
const awsRoutes = require('./routes/awsRoutes')
app.use(cors());
app.use(awsRoutes);

app.listen(3000, ()=>{
    console.log("Aplicacao rodando na porta 3010")
})