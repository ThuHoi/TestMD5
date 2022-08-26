import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ShowComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ViewDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
