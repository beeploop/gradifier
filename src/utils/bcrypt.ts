import bcrypt from "bcrypt";

export class BCrypt {
    salt: number;

    constructor() {
        this.salt = 10;
    }

    hash(password: string): string {
        return bcrypt.hashSync(password, this.salt);
    }

    comparePassword(plain: string, hashed: string): boolean {
        return bcrypt.compareSync(plain, hashed);
    }
}
