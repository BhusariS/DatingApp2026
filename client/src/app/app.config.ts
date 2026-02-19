import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InitService } from '../core/services/init-service';
import { lastValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideAppInitializer(async ()=>{
      const initService =inject(InitService);

      return new Promise<void>((resolve )=>{
        setTimeout(async ()=>{
        try{
        return lastValueFrom(initService.Init())
        }finally{
        const spalsh=document.getElementById('initial-splash');
        if (spalsh){
          spalsh.remove();
      }
      resolve()
    }
        },500)
      })
      
    })
  ]
};
