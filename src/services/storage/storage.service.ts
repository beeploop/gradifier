import { UserRepository } from "../../repositories/user.repository";

export class StorageService {
    repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    async store(file: Express.Multer.File, userID: string): Promise<string> {
        const user = await this.repository.findById(userID);
        if (!user) {
            throw new Error("user not found");
        }

        const filepath = `/${file.path}`;
        user.changeProfile(filepath);
        await this.repository.save(user);

        return filepath;
    }
}
