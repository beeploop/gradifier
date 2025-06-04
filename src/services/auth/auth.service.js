export class AuthService {
  /**
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    if (email !== "admin@email.com" || password !== "password") {
      throw new Error("invalid credentials");
    }

    console.log({ email, password });
  }

  async logout() {
    console.log("logged out");
  }
}
