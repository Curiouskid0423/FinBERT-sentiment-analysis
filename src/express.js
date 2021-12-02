// Express section
const express = require('express')
const {spawn} = require('child_process')
const app = express()
const port = 3001

let word = ""
app.get('/', (req, res) => {
    let dataToSend;
    const python = spawn('python', ['python_codes/bert.py', ]);
    // Read data from python script
    python.stdout.on('data', (data) => {
        console.log('Data retrieved from python file...');
        dataToSend = data.toString();
    });
    // Close event to ensure the child process is closed
    python.on('close', (code) => {
        console.log('Child process closed.')
        res.send(dataToSend)
    });
});

app.listen(port, () => console.log(`Test app listening at ${port}.`));