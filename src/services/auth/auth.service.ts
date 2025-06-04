export class AuthService {
    async login(email: string, password: string) {
        if (email !== "admin@email.com" || password != "password") {
            throw new Error("invalid credentials");
        }

        console.log({ email, password });
    }

    async logout() {
        console.log("logged out");
    }
}
