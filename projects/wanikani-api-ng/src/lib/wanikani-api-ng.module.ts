import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AssignmentService } from './services/assignment.service';
import { LevelProgressionService } from './services/level-progression.service';
import { ResetService } from './services/reset.service';
import { ReviewStatisticService } from './services/review-statistic.service';
import { ReviewService } from './services/review.service';
import { SpacedRepetitionSystemService } from './services/spaced-repetition-system.service';
import { StudyMaterialService } from './services/study-material.service';
import { SummaryService } from './services/summary.service';
import { UserService } from './services/user.service';
import { VoiceActorService } from './services/voice-actor.service';
import { WaniSubjectService } from './services/wani-subject.service';

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
    SpacedRepetitionSystemService,
    SummaryService,
    UserService,
    VoiceActorService,
    WaniSubjectService
  ]
})
export class WanikaniApiNgModule { }
