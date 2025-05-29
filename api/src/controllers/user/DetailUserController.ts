import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle(request: Request, response: Response) {
        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute();

        return response.json(user);
    }
}

export { DetailUserController };