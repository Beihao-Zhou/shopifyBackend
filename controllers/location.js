import mongoose from 'mongoose';
import Location from '../models/location.js';

export const getLocations = async (req, res) => {
    try {
        const locations = await Location.find();

        res.status(200).json({ data: locations });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const createLocation = async (req, res) => {
    const inventory = req.body;
    const newLocation = new Location(inventory);
    try {
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export const deleteLocation = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No location with the id');

    await Location.findByIdAndRemove(id);

    res.json({ message: "Location deleted successfully!"});
}

