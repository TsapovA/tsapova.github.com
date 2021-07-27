import { Customer } from "./customer";
import { Pet } from "./pet";

export interface Donor {
  pet: Pet
  owner: Customer
}
