import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRegion } from '../util/region.interface';

@Injectable()
export class RegionSelectors {

    constructor(private store: Store<any>) { }

    getAsianRegions(): Observable<Array<IRegion>> {
        return this.store.select(state => state.regions.asianRegions.list);
    }

    getEuropeanRegions() {
        return this.store.select(state => state.regions.europeanRegions.list);
    }

}
