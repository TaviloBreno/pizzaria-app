import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        if (!item_id) {
            return res.status(400).json({ error: 'Item ID is required' });
        }

        const removeItemService = new RemoveItemService();

        try {
            const item = await removeItemService.execute({ item_id });
            return res.json(item);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to remove item from order' });
        }
    }
}

export { RemoveItemController };