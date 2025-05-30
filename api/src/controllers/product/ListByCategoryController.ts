import { Request, Response } from 'express';
import { ListByCategoryService } from '../../services/product/ListByCategoryService';

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = Array.isArray(req.query.category_id)
            ? String(req.query.category_id[0])
            : String(req.query.category_id);

        const listByCategoryService = new ListByCategoryService();

        const products = await listByCategoryService.execute({
            category_id,
        });

        return res.json(products);
    }
}

export { ListByCategoryController };