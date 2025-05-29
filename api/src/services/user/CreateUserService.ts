import prismaClent from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({ name, email, password }: UserRequest){
        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await prismaClent.user.findFirst({
            where: {
                email: email
            }
        });

        if(userAlreadyExists){
            throw new Error("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClent.user.create({
            data: {
                name,
                email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        return user;
    }
}

export { CreateUserService };