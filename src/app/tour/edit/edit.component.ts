import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourServiceService} from "../../service/TourService.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  tourForm: any;
  id: any;

  constructor(private tourService: TourServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    });

  }

  ngOnInit(): void {
  }
  getTour(id: number) {
    return this.tourService.findById(id).subscribe(tour => {
      this.tourForm = new FormGroup({
        title: new FormControl(tour.title),
        price: new FormControl(tour.price),
        description: new FormControl(tour.description)
      });
    });
  }
  updateTour(id: number) {
    const tour = this.tourForm.value;
    this.tourService.updateTour(id,tour).subscribe(() =>{
      this.router.navigate([''])
    }, e => console.log(e));
  }

}
