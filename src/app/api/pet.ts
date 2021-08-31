import {Customer} from "./customer";

export interface Pet {
  id: number | null,
  type: String | null,
  bloodType: String | null,
  age: Number | null,
  customer: Customer | null
}
