import {Dictionary} from "../api/dictionary";

export const dogPetTypeKey = 'DOG'
export const catPetTypeKey = 'CAT'

export const petTypes: Dictionary[] = [
  { key: dogPetTypeKey, textValue: "собака" },
  { key: catPetTypeKey, textValue: "кошка" },
]

export const catBloodTypes: Dictionary[] = [
  { key: "UNKNOWN", textValue: "Не известно" },
  { key: "A", textValue: "A" },
  { key: "B", textValue: "B" },
  { key: "AB", textValue: "AB" }
]
