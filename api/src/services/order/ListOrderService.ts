import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
        orderBy: {
            createdAt: "desc",
        }, 
    });

    return orders;
  }
}

export { ListOrderService };