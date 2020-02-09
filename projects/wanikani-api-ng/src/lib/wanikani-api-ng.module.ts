import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentsService } from './services/assignments.service';
import { LevelProgressionsService } from './services/level-progressions.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AssignmentsService,
    LevelProgressionsService,
    UserService,
  ]
})
export class WanikaniApiNgModule { }
