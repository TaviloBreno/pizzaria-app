import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, price, description, banner, category_id } = request.body;

        const createProductService = new CreateProductService();

        try {
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return response.json(product);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { CreateProductController };