import express from 'express';

import { getInventories, createInventory, updateInventory, deleteInventory } from '../controllers/inventory.js'
const router = express.Router();

router.get('/', getInventories);
router.post('/', createInventory);
router.patch('/:id', updateInventory);
router.delete('/:id', deleteInventory);

export default router;