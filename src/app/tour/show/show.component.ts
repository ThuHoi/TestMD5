import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourServiceService} from "../../service/TourService.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tourService.getAll().subscribe(tours => {
      this.tours = tours;
    });
  }

}
