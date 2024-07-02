import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser'
import { enableProdMode, NgZone } from '@angular/core';
import { environment } from './environments/environment';
import { AppProps } from 'single-spa';

if(environment.production){
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps: AppProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template:'<app-root />',
  NgZone,
  //@ts-ignore
  AnimationEngine,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
