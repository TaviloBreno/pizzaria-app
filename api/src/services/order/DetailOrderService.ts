import prismaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {
    const order = await prismaClient.order.findFirst({
      where: {
        id: order_id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return order;
  }
}

export { DetailOrderService };
