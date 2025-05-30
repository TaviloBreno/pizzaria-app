import { Request, Response } from 'express';
import { AddItemService } from '../../services/order/AddItemService';

class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;

        if (!order_id || !product_id || !amount) {
            return res.status(400).json({ error: 'Order ID, Product ID, and Amount are required' });
        }

        const addItemService = new AddItemService();

        try {
            const item = await addItemService.execute({ order_id, product_id, amount });
            return res.json(item);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to add item to order' });
        }
    }
}

export { AddItemController };