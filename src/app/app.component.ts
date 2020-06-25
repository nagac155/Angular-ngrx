import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegionsActions } from './core/actions/regions.actions';
import { RegionSelectors } from './core/selectors/region.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-ngrx';
  regions$ = this.regionSelectors.getAsianRegions();


  constructor(private http: HttpClient,
              public regionsActions: RegionsActions,
              public regionSelectors: RegionSelectors) {}


  ngOnInit() {
    this.regionsActions.requestAsianRegions();
  }
}
