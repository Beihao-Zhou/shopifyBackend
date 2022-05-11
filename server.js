import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import inventoryRoutes from './routes/inventory.js';
import locationRoutes from './routes/location.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/inventory', inventoryRoutes);
app.use('/location', locationRoutes);

app.get('/', (req,res) => {
    res.send('Hello to Inventory API');
})

// connect to mongodb atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch( err => console.log(err.message));