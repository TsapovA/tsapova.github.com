import { Component, OnInit } from '@angular/core';
import { PetCreateRequest } from "../../api/pet-create-request";
import { CustomerCreateRequest } from "../../api/customer-create-request";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuickService } from "../../service/quick.service";
import { catBloodTypes, catPetTypeKey, petTypes } from "../pet-constants";
import { QuickCustomerPetCreateRequest } from "../../api/quick-customer-pet-create-request";
import { cities } from "../person-constants";

@Component({
  selector: 'app-donor-quick',
  templateUrl: './donor-quick.component.html',
  styleUrls: ['./donor-quick.component.css']
})
export class DonorQuickComponent implements OnInit {

  petTypes = petTypes
  catBloodTypes = catBloodTypes
  showBloodType: boolean = false
  cities = cities

  pet: PetCreateRequest = {
    type: '',
    bloodType: null,
    age: 0
  }
  owner: CustomerCreateRequest = {
    surname: '',
    name: '',
    city: '',
    email: '',
    phoneNumber: ''
  }

  donorForm = new FormGroup({
    pet: new FormGroup({
      type: new FormControl(this.pet.type,
        Validators.required),
      bloodType: new FormControl(this.pet.bloodType),
      age: new FormControl(this.pet.age, [
        Validators.required,
        Validators.min(0),
        Validators.max(50)]),
    }),
    owner: new FormGroup({
      surname: new FormControl(this.owner.surname,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)]),
      name: new FormControl(this.owner.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)]),
      city: new FormControl(this.owner.city,
        Validators.required),
      email: new FormControl(this.owner.email,
        Validators.email),
      phoneNumber: new FormControl(this.owner.phoneNumber,
        Validators.required)
    })
  });

  constructor(
    private quickService: QuickService
  ) {
  }

  ngOnInit(): void {
    this.type?.setValue(petTypes[0]?.key)
  }

  onPetTypeChange(event: Event) {
    this.donorForm.get('bloodType')?.setValue(null);
    this.showBloodType = (event.target as HTMLInputElement).value == catPetTypeKey
    console.log((event.target as HTMLInputElement).value)
  }

  onSubmit(): void {
    console.log(`form invalid: ${this.donorForm.invalid}`)
    if (this.donorForm.invalid) {
      return;
    }
    this.saveData()
  }

  saveData(): void {
    let form = this.donorForm.value

    let createRequest: QuickCustomerPetCreateRequest = {
      customerCreateRequest: {
        surname: form.owner.surname,
        name: form.owner.name,
        city: form.owner.city,
        email: form.owner.email,
        phoneNumber: form.owner.phoneNumber
      },
      petCreateRequest: {
        type: form.pet.type,
        bloodType: form.pet.bloodType,
        age: form.pet.age
      }
    }
    console.log(createRequest)
    this.quickService.save(createRequest)
  }


  get type() {
    return this.donorForm.get('type')
  }

  get bloodType() {
    return this.donorForm.get('bloodType')
  }

  get age() {
    return this.donorForm.get('age')
  }

  get ownerName() {
    return this.donorForm.get('ownerName')
  }

  get ownerSurname() {
    return this.donorForm.get('ownerSurname')
  }

  get ownerEmail() {
    return this.donorForm.get('ownerEmail')
  }

  get ownerPhoneNumber() {
    return this.donorForm.get('ownerPhoneNumber')
  }
}
