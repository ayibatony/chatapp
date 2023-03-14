const express = require('express');
require('dotenv').config();

const RouteMessage = express.Router();

RouteMessage.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })

  RouteMessage.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })
  
  module.exports = RouteMessage;
