const express = require('express');
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8081;
const app = express();

app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '..', 'personal')))
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'personal/index.html'))
  })

app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
  });
