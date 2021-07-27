import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Donor} from "../../api/donor";
import {catBloodTypes, catPetTypeKey, petTypes} from "../pet-constants";
import {CustomerService} from "../../service/customer.service";
import {CustomerCreateRequest} from "../../api/customer-create-request";

@Component({
  selector: 'app-donor-new',
  templateUrl: './donor-new.component.html',
  styleUrls: ['./donor-new.component.css']
})
export class DonorNewComponent implements OnInit {

  petTypes = petTypes
  catBloodTypes = catBloodTypes
  showBloodType: boolean = false

  donor: Donor = {
    pet: {
      type: null,
      bloodType: null,
      age: null
    },
    owner: {
      id: null,
      surname: null,
      name: null,
      email: null,
      phoneNumber: null
    }
  }

  newDonorForm!: FormGroup

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.newDonorForm = new FormGroup({
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
    this.type?.setValue(petTypes[0]?.key)
  }

  onPetTypeChange(event: Event) {
    this.bloodType?.setValue(null);
    this.showBloodType = (event.target as HTMLInputElement).value == catPetTypeKey
    console.log((event.target as HTMLInputElement).value)
  }

  get type() { return this.newDonorForm.get('type')}
  get bloodType() { return this.newDonorForm.get('bloodType')}
  get age() { return this.newDonorForm.get('age')}

  get ownerName() { return this.newDonorForm.get('ownerName')}
  get ownerSurname() { return this.newDonorForm.get('ownerSurname')}
  get ownerEmail() { return this.newDonorForm.get('ownerEmail')}
  get ownerPhoneNumber() { return this.newDonorForm.get('ownerPhoneNumber')}

  onSubmit(): void {
    console.log(`form invalid: ${this.newDonorForm.invalid}`)
    let value = this.newDonorForm.value;
    console.log(value)
    let customerCreateRequest: CustomerCreateRequest = {
      surname: this.ownerSurname,

    }
    this.customerService.save(customerCreateRequest)
  }
}
