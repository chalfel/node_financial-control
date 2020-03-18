const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://caio:caio@cluster0-4mufb.mongodb.net/financialControl?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});