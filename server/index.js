require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
// eslint-disable-next-line no-unused-vars
const db = require('../database/index');
const model = require('../database/controllers');

const api = 'https://api.mozambiquehe.re/';
const auth = process.env.AUTH;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:username/:platform/stats', (req, res) => {
  const { username, platform } = req.params;
  axios.get(`${api}/bridge?auth=${auth}&player=${username}&platform=${platform}&removeMerged=true`)
    .then((response) => res.send(response.data.global))
    .catch((err) => res.send(err));
});

app.get('/:platform/rp', (req, res) => {
  axios.get(`${api}predator?auth=${auth}`)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

app.get('/news', (req, res) => {
  axios.get(`${api}news?auth=${auth}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.error(err));
});

app.post('/signup', (req, res) => {
  const { password, username, platform } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => model.save({ username, platform, password: hash }))
    .catch((err) => console.error(err))
    .then(() => res.status(201).send('User added to database'))
    .catch((err) => res.status(400).send(err));
});

app.post('/login', (req, res) => {
  const { password, username } = req.body;
  model.get(username)
    .then((user) => {
      if (user.length < 1) {
        res.status(400).send("User doesn't exist");
      } else {
        bcrypt.compare(password, user[0].password)
          .then((result) => res.send(result));
      }
    })
    .catch((err) => console.error(err));
});

const port = process.env.PORT;

app.listen(port, console.log(`listening on port ${port}`));
