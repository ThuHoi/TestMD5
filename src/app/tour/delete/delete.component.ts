import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourServiceService} from "../../service/TourService.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit, OnChanges {
  tourForm: any;
  id: any;

  constructor(private tourService: TourServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tourForm = data
        console.log(data)
      })
    })

  }
  delete(){
    this.tourService.deleteTour(this.id).subscribe()
    this.router.navigate(["/"]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tourForm = data
        console.log(data)
      })
    })
  }

}
