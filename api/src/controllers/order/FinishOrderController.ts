import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService';

class FinishOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;

    const finishOrderService = new FinishOrderService();

    try {
      const order = await finishOrderService.execute({ order_id });
      return response.json(order);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { FinishOrderController };