import { Component, OnInit } from '@angular/core';
import {Donor} from "../donor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catBloodTypes, catPetTypeKey, petTypes} from "../pet-constants";

@Component({
  selector: 'app-donor-search',
  templateUrl: './donor-search.component.html',
  styleUrls: ['./donor-search.component.css']
})
export class DonorSearchComponent implements OnInit {

  petTypes = petTypes
  catBloodTypes = catBloodTypes
  showBloodtype: boolean = false

  donor: Donor = {
    pet: {
      type: null,
      bloodType: null,
      age: null
    },
    owner: {
      surname: null,
      name: null,
      email: null,
      phoneNumber: null
    }
  }

  searchDonorForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.searchDonorForm = new FormGroup({
      type: new FormControl(this.donor.pet.type, [Validators.required]),
      bloodType: new FormControl(this.donor.pet.bloodType),
      age: new FormControl(this.donor.pet.age, [Validators.required, Validators.min(0), Validators.max(50)]),
      ownerSurname: new FormControl(this.donor.owner.surname,
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      ownerName: new FormControl(this.donor.owner.name,
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      ownerEmail: new FormControl(this.donor.owner.email, Validators.email),
      ownerPhoneNumber: new FormControl(this.donor.owner.phoneNumber, Validators.required)
    })
    this.type?.setValue(this.petTypes[0]?.key)
  }

  onPetTypeChange(event: Event) {
    this.bloodType?.setValue(null);
    this.showBloodtype = (event.target as HTMLInputElement).value == catPetTypeKey
    console.log((event.target as HTMLInputElement).value)
  }

  get type() { return this.searchDonorForm.get('type')}
  get bloodType() { return this.searchDonorForm.get('bloodType')}
  get age() { return this.searchDonorForm.get('age')}

  get ownerName() { return this.searchDonorForm.get('ownerName')}
  get ownerSurname() { return this.searchDonorForm.get('ownerSurname')}
  get ownerEmail() { return this.searchDonorForm.get('ownerEmail')}
  get ownerPhoneNumber() { return this.searchDonorForm.get('ownerPhoneNumber')}

  onSubmit(): void {
    console.log(`form invalid: ${this.searchDonorForm.invalid}`)
    let value = this.searchDonorForm.value;
    console.log(value)
  }
}
