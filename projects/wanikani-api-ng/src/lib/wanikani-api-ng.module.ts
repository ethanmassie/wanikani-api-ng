import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentsService } from './services/assignments.service';
import { LevelProgressionsService } from './services/level-progressions.service';
import { ResetsService } from './services/resets.service';
import { ReviewsService } from './services/reviews.service';
import { ReviewStatisticsService } from './services/review-statistics.service';
import { SrsStageService } from './services/srs-stage.service';
import { SummaryService } from './services/summary.service';
import { UserService } from './services/user.service';
import { VoiceActorService } from './services/voice-actor.service';
import { StudyMaterialsService } from './services/study-materials.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AssignmentsService,
    LevelProgressionsService,
    ResetsService,
    ReviewsService,
    ReviewStatisticsService,
    StudyMaterialsService,
    SrsStageService,
    SummaryService,
    UserService,
    VoiceActorService,
  ]
})
export class WanikaniApiNgModule { }
