import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WanikaniTokenService } from './services/wanikani-token.service';
import { WanikaniTokenInterceptorService } from './services/wanikani-token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WanikaniTokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WanikaniTokenInterceptorService,
      multi: true
    }
  ]
})
export class WanikaniTokenModule {}