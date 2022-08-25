import { Component, OnInit } from '@angular/core';
import {TourServiceService} from "../../service/TourService.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  tourForm: any;
  id: any;

  constructor(private tourService: TourServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data) => {
        this.tourForm = data
      });
    })
  }

  ngOnInit(): void {

  }
}

