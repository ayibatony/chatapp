const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageModel = new Schema({
  
  Message: { name: String,
     message: String
     },
  
  
  })





//var Message = mongoose.model("Message",{ name : String, message : String});


const Message = mongoose.model('Message', MessageModel);

module.exports = Message;