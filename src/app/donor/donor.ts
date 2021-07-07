import {Person} from "./person";
import {Pet} from "./pet";

export interface Donor {
  pet: Pet
  owner: Person
}
