import { Request, Response } from 'express';
import { RemoveOrderService } from '../../services/order/RemoveOrderService';

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        if (!order_id) {
            return res.status(400).json({ error: 'Order ID is required' });
        }

        const removeOrderService = new RemoveOrderService();

        try {
            const order = await removeOrderService.execute({ order_id });
            return res.json(order);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to remove order' });
        }
    }
}

export { RemoveOrderController };