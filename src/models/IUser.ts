export interface IUser {
  id: number;
  avatar_url: string;
  name: string;
  username: string;
  email: string;
  getMoney: number;
  lostMoney: number;
  registration: Date;
}