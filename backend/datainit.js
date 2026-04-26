const {holdings , positions} = require("./data.js");
const Holding = require("./model/HoldingsModel.js");
const Position = require("./model/PositionsModel.js");

const mongoose = require("mongoose");
require("dotenv").config();

const uri =process.env.MONGO_URL;

async function main() {
  await mongoose.connect(uri);

}
 

main()
.then(() => {
    console.log("Connected to MongoDB" );
})
.catch(err=>{
    console.log("Error connecting to MongoDB:", err);
})

const initDBHoldings = async () => {
    await Holding.deleteMany({});
    console.log("all data deleted")
    
    console.log("Is Array?", Array.isArray(holdings));

console.log("Data:", holdings);
    const result = await Holding.insertMany(holdings);
    console.log(result.length);
    console.log("Holdings data initialized");
    
    
}

initDBHoldings();

const initDBPositions = async () => {
    await Position.deleteMany({});
    console.log("all data deleted");
    const result = await Position.insertMany(positions);
    console.log(result);
    console.log("positions data initialized");
}

initDBPositions();














//     holdings.forEach((holding)=>{
//         const newholdings = new HoldingsModel({
//         name: holding.name,
//         qty: holding.qty,
//         avg: holding.avg,
//         price: holding.price,
//         net: holding.net,
//         day: holding.day,
//     })

//     newholdings.save();
// })

// console.log("Holdings data initialized");

