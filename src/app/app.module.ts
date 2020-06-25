import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RequestAsianRegionsEffect } from './core/effects/request-asian-regions.effect';
import { StoreModule } from '@ngrx/store';
import { regionsReducer } from './core/reducers/regions.reducers';
import { RegionsService } from './core/services/regions.service';
import { RegionsActions } from './core/actions/regions.actions';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { RegionSelectors } from './core/selectors/region.selectors';
import { RequestEuropeanRegionsEffect } from './core/effects/request-european-regions.effect';


export function logger(reducer): any {
  return storeLogger({
    collapsed: true,
    duration: false,
    timestamp: false,
  })(reducer);
}

const metaReducers = environment.production ? [] : [storeFreeze, logger];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([RequestAsianRegionsEffect, RequestEuropeanRegionsEffect]),
    StoreModule.forRoot({regions: regionsReducer}, { metaReducers }),
  ],
  providers: [
    RegionsService,
    RegionsActions,
    RegionSelectors,
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
