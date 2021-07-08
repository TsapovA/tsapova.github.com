import {Dictory} from "./dictory";

export const dogPetTypeKey = 'dog'
export const catPetTypeKey = 'cat'

export const petTypes: Dictory[] = [
  { key: dogPetTypeKey, name: "собака" },
  { key: catPetTypeKey, name: "кошка" },
]

export const catBloodTypes: Dictory[] = [
  { key: "Unknown", name: "Не известно" },
  { key: "A", name: "A" },
  { key: "B", name: "B" },
  { key: "AB", name: "AB" }
]
