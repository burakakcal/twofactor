require('./users');
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://admin:sampiyon@cluster0.jkfwe.mongodb.net/2fa';

mongoose.set('useCreateIndex', true);
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
