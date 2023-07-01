const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const xlsx = require('xlsx');
const PORT = process.env.PORT || 1234;

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.get('/getSingleStudent', (req, res)=>{
    res.send({id:14, name:'Anthony', age:24})
})

app.get('/getAllStudents', (req, res)=>{  
    let wb = xlsx.readFile('data.xlsx');
    let ws = wb.Sheets['students'];
    let data = xlsx.utils.sheet_to_json(ws);
    res.send(data);
})

app.listen(PORT)
