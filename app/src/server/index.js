const express = require('express');
const app = express();
const path = require('path');
const { socketsHandler }= require('./socketsHandler');

const port = process.env.PORT || 8000;

// Set the express instance to server static assets from the right location
app.use(express.static(path.resolve(__dirname, '../../../app/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../app/dist', 'index.html'));
});

const server = app.listen(port);

const socketIOServer = socketsHandler({ server });
