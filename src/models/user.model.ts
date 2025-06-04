import { BCrypt } from "../utils/bcrypt";

type TUser = {
    id: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
};

export class UserModel {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(user: TUser) {
        this.id = user.id;
        this.email = user.email;
        this.password = user.password;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }

    static fromDB(user: TUser) {
        return new UserModel(user);
    }

    static createNew(email: string, password: string) {
        const hashed = new BCrypt().hash(password);

        return new UserModel({
            id: crypto.randomUUID(),
            email: email,
            password: hashed,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    isCorrectPassword(password: string): boolean {
        return new BCrypt().comparePassword(password, this.password);
    }
}
