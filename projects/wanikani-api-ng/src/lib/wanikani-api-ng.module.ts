import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentService } from './services/assignment.service';
import { LevelProgressionService } from './services/level-progression.service';
import { ResetService } from './services/reset.service';
import { ReviewService } from './services/review.service';
import { ReviewStatisticService } from './services/review-statistic.service';
import { SrsStageService } from './services/srs-stage.service';
import { SummaryService } from './services/summary.service';
import { UserService } from './services/user.service';
import { VoiceActorService } from './services/voice-actor.service';
import { StudyMaterialService } from './services/study-material.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AssignmentService,
    LevelProgressionService,
    ResetService,
    ReviewService,
    ReviewStatisticService,
    StudyMaterialService,
    SrsStageService,
    SummaryService,
    UserService,
    VoiceActorService,
  ]
})
export class WanikaniApiNgModule { }
