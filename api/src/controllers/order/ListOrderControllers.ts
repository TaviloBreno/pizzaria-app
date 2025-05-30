import { Request, Response } from 'express';
import { ListOrderService } from '../../services/order/ListOrderService';

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrderService = new ListOrderService();

    try {
      const orders = await listOrderService.execute();
      return res.json(orders);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ListOrderController };