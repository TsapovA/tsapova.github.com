import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {DictionaryService} from "../../service/dictionary.service";
import {Dictionary} from "../../api/dictionary";
import {catPetTypeKey} from "../pet-constants";

@Component({
  selector: 'app-donor-new',
  templateUrl: './donor-new.component.html',
  styleUrls: ['./donor-new.component.css']
})
export class DonorNewComponent implements OnInit {

  petTypes: Dictionary[] = []
  catBloodTypes: Dictionary[] = []
  cities: Dictionary[] = []

  showBloodType: boolean = false

  donorForm!: FormGroup
  type!: AbstractControl
  bloodType!: AbstractControl
  age!: AbstractControl


  constructor(
    private dictoryService: DictionaryService
  ) {
  }

  ngOnInit(): void {
    this.donorForm = new FormGroup({
      type: new FormControl(null,
        Validators.required),
      bloodType: new FormControl(null),
      age: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(50)]),
      city: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ])
    })

    this.type = this.donorForm.controls['type']
    this.bloodType = this.donorForm.controls['bloodType']
    this.age = this.donorForm.controls['age']

    //this.petTypes = petTypes
    this.getPetTypes()
    this.getCatBloodTypes()
    this.getCities()
  }

  onSubmit(): void {
    if (this.donorForm.invalid) {
      return;
    }
    this.saveData()
  }

  saveData(): void {

  }

  getPetTypes(): void {
    if (this.petTypes.length === 0)
      this.dictoryService.getPetTypes().subscribe(values => {
        console.log(values)
        this.petTypes = values
      })

  }

  getCatBloodTypes(): void {
    if (this.catBloodTypes.length === 0) {
      this.dictoryService.getCatBloodTypes().subscribe(values => this.catBloodTypes = values)
    }
  }

  getCities(): void {
    if (this.cities.length == 0) {
      this.dictoryService.getCities().subscribe(values => this.cities = values);
    }
  }

  onPetTypeChange(event: Event) {
    console.log(`From the donor form: `)
    console.log(this.donorForm.get('type'))
    console.log(`From the event: `)
    console.log((event.target as HTMLInputElement).value)
    this.showBloodType = catPetTypeKey == this.type.value
  }
}
