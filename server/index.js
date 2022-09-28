require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const api = 'https://api.mozambiquehe.re/';
const auth = process.env.AUTH;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:username/:platform/stats', (req, res) => {
  const { user, plat } = req.params;
  axios.get(`${api}/bridge?auth=${auth}&player=${user}&platform=${plat}&removeMerged=true`)
    .then((response) => res.send(response.data.global))
    .catch((err) => res.send(err));
});

app.get('/news', (req, res) => {
  axios.get(`${api}news?auth=${auth}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.error(err));
});

const port = process.env.PORT;

app.listen(port, console.log(`listening on port ${port}`));
