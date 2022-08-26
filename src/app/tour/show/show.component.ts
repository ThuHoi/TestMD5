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

  constructor(private tourService: TourServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tourService.getAll().subscribe(tours => {
      this.tours = tours;
    });
  }

  search(input: any) {
    const tourSearch: Tour[] = [];
    this.tourService.getAll().subscribe(tours => {
      for (const tour of tours) {
        if (tour.title?.toLowerCase().normalize('NFD') .replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(input.toLowerCase().normalize('NFD') .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
          tourSearch.push(tour)
        }
        this.tours = tourSearch;
      }
    })
  }
}
