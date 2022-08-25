import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {TourServiceService} from "../../service/TourService.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tourForm: FormGroup = new FormGroup({
    title: new FormControl("",Validators.required),
    price: new FormControl(0,Validators.pattern('[1-4]')),
    description: new FormControl("",[Validators.required, Validators.minLength(3)])
  });

  constructor(private tourService: TourServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const tour = this.tourForm.value;
    this.tourService.saveTour(tour).subscribe(() =>{
      this.tourForm.reset();
      this.router.navigate(['']);

    });

  }

}
