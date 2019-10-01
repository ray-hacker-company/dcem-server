const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function binarr(size) {
    a = '';
    for (let i = 0; i < size; i++) {
        a += Math.round(Math.random() - 0.4)
    }
    return a;
}
app.get('/', (req, res) => { res.send("Working") });
app.get('/home/', (req, res) => {
    r = 3+Math.random()/2;
    v = Math.round((5 + Math.random() * 20) * 10) / 10;

    console.log("Got request");
    res.send(
        {
            'Location': "LLLLL",
            'Device ID': 'DDDDDDDDDDDDDDDDD',
            'Voltage': v,
            'Current': v/r,
            'Alarm': binarr(9),
            'Gateway': 'GGGGGGGGGGGGGGGGG',
            'Temperature': Math.round((20 + Math.random() * 20) * 100) / 100,
            'Code': '00'
        }
    )
});
app.get('/single-monitor/', (req, res) => {
    r = 3+Math.random()/2;
    v = Math.round((5 + Math.random() * 20) * 10) / 10;
    res.send(
        {
            voltage: v,
            current: v/r,
        }
    )
});



port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`base URL\t\t: http://localhost:${port}/`);
    console.log(`Home URL \t\t: http://localhost:${port}/home/`);
    console.log(`Single Monitor URL\t: http://localhost:${port}/single-monitor/`);
})

