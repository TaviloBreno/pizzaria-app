import { parse } from "dotenv";
import prismaClient from "../../prisma";

interface OrderRequest {
    table: number | string;
    name: string;
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                table: parseInt(table.toString(), 10),
                name,
            },
        });

        return order;
    }
}

export { CreateOrderService };