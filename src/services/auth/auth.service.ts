import { UserModel } from "../../models/user.model";
import { UserRepository } from "../../repositories/user.repository";

export class AuthService {
    repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    async login(email: string, password: string): Promise<UserModel> {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error("user not found");
        }

        if (!user.isCorrectPassword(password)) {
            throw new Error("invalid credentials");
        }

        return user;
    }

    async logout() {
        console.log("logged out");
    }
}
