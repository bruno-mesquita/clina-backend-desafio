import { Address } from './Address';

export class Room {
  nome: string;
  description: string;
  addressId: number;
  photos?: string[];
  address?: Address;
}
