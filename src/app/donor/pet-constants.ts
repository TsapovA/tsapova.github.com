import {Dictory} from "../api/dictory";

export const dogPetTypeKey = 'DOG'
export const catPetTypeKey = 'CAT'

export const petTypes: Dictory[] = [
  { key: dogPetTypeKey, name: "собака" },
  { key: catPetTypeKey, name: "кошка" },
]

export const catBloodTypes: Dictory[] = [
  { key: "UNKNOWN", name: "Не известно" },
  { key: "A", name: "A" },
  { key: "B", name: "B" },
  { key: "AB", name: "AB" }
]
