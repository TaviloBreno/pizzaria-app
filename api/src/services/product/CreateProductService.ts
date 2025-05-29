import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: number;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({ name, price, description, banner, category_id }: ProductRequest){
        const productAlreadyExists = await prismaClient.product.findFirst({
            where: {
                name: name,
            },
        });

        if (productAlreadyExists) {
            throw new Error("Product already exists");
        }

        // Cria o produto
        const product = await prismaClient.product.create({
            data: {
                name,
                price,
                description,
                banner,
                category_id,
            },
        });

        return product;
    }
}

export { CreateProductService };