'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  name: {type: String, required:true},
  age: {type: Number, required:true},
  hometown: {type:String, required:false},
  numOfPokemon: {type:Number, required:true},
});

module.exports = mongoose.model('trainer', trainerSchema);
