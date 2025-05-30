import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const sendOrderService = new SendOrderService();

    try {
      const order = await sendOrderService.execute({ order_id });
      return res.json(order);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { SendOrderController };