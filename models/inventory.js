import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
    name: String,
    locationId: String, 
    quantity: Number, 
    unitPrice: Number, 
    totalValue: Number
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;