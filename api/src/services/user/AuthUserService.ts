import prismaClent from "../../prisma";
import { compare } from "bcryptjs";

interface AuthUserRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password } : AuthUserRequest){
        const user = await prismaClent.user.findFirst({
            where: {
                email: email
            }
        });

        if(!user){
            throw new Error("User or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("User or password incorrect");
        }
    }
}

export { AuthUserService };