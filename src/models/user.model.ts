type TUser = {
    id: string,
    name: string,
    email: string,
    imageUrl: string | null,
    password: string,
    createdAt: Date,
    updatedAt: Date,
};

export class UserModel {
    id: string;
    name: string;
    email: string;
    imageUrl: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(user: TUser) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.imageUrl = user.imageUrl;
        this.password = user.password;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }

    static fromDB(user: TUser) {
        return new UserModel(user);
    }

    static createNew(name: string, email: string, password: string) {
        return new UserModel({
            id: crypto.randomUUID(),
            name: name,
            email: email,
            imageUrl: "",
            password: password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    isCorrectPassword(password: string): boolean {
        return this.password === password;
    }
}
