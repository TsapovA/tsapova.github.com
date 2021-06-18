import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-service-donor',
  templateUrl: './service-donor.component.html',
  styleUrls: ['./service-donor.component.css']
})
export class ServiceDonorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
