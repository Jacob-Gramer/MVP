require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const api = 'https://api.mozambiquehe.re/bridge';
const auth = process.env.AUTH;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:username/:platform/stats', (req, res) => {
  const user = req.params.username;
  const plat = req.params.platform;
  axios.get(`${api}?auth=${auth}&player=${user}&platform=${plat}`)
    .then((response) => {
      console.log(response.data);
      res.send('all good');
    })
    .catch((err) => res.send(err));
});

const port = process.env.PORT;

app.listen(port, console.log(`listening on port ${port}`));
