const express = require('express');
const app = express();
app.use(express.json());

const xlsx = require('xlsx');

const wb = xlsx.readFile('./dados.xlsx');
const ws = wb.Sheets["Sheet1"];
const data = xlsx.utils.sheet_to_json(ws, { defval: "" });

app.get('/', (req, res) => {
    res.send({
        data: data
    });
});

app.listen(3001, () => console.log('REST API Server is running...'));