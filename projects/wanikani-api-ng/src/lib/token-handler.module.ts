import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from './services/token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../public-api';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class TokenHandlerModule {}