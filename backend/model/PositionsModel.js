const {Model} = require("mongoose");

const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");
const PositionsModel = new mongoose.model( "Position" , PositionsSchema);


module.exports = PositionsModel;