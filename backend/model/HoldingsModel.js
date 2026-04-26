const {Model} = require("mongoose");
const mongoose = require("mongoose");

const HoldingsSchema = require("../schemas/HoldingsSchema");
const HoldingsModel = new mongoose.model( "Holding" , HoldingsSchema);


module.exports = HoldingsModel; 