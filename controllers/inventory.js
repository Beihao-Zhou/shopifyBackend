import mongoose from 'mongoose';
import Inventory from '../models/inventory.js';

export const getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find().sort({ _id: -1 });

        res.status(200).json({ data: inventories });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const createInventory = async (req, res) => {
    const inventory = req.body;
    console.log(inventory);
    const newInventory = new Inventory(inventory);
    console.log(newInventory);
    try {
        await newInventory.save();
        res.status(201).json(newInventory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export const updateInventory = async (req, res) => {
    const { id } = req.params; 

    const inventory = req.body;
    console.log(inventory);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No inventory with that id');

    const updatedInventory = await Inventory.findByIdAndUpdate(id, inventory, { new: true });

    res.json(updatedInventory);
}


export const deleteInventory = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No inventory with the id');

    await Inventory.findByIdAndRemove(id);

    console.log('DELETE');

    res.json({ message: "Inventory deleted successfully!"});
}

