import { bootstrap } from '@angular/platform/browser';
import { bind } from '@angular/core';
import { FORM_PROVIDERS } from "@angular/common";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
