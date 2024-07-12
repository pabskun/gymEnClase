const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const personRoutes = require('./routes/personRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://pabs:pabs123@testcluster.zpqoz6x.mongodb.net/gymDBEnClase')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

//app.use('/persons', personRoutes);
app.use('/diseases', diseaseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
