import { compareSync, hashSync } from 'bcryptjs';

export class User {
  name: string;
  email: string;
  password: string;
  avatarId: string;
  avatar?: string;

  public hashPassword(): void {
    this.password = hashSync(this.password, 8);
  }

  public comparePassword(comparePassword: string): boolean {
    try {
      return compareSync(comparePassword, this.password);
    } catch (err) {
      return false;
    }
  }
}
