import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../util/create-action.util';

@Injectable()
export class RegionsActions {
    static ASIAN_REGIONS_REQUESTED = 'ASIAN_REGIONS_REQUESTED';
    static ASIAN_REGIONS_REQUEST_SUCCEEDED = 'ASIAN_REGIONS_REQUEST_SUCCEEDED';
    static ASIAN_REGIONS_REQUEST_FAILED = 'ASIAN_REGIONS_REQUEST_FAILED';
    static EUROPEAN_REGIONS_REQUESTED = 'EUROPEAN_REGIONS_REQUESTED';
    static EUROPEAN_REGIONS_REQUEST_SUCCEEDED = 'EUROPEAN_REGIONS_REQUEST_SUCCEEDED';
    static EUROPEAN_REGIONS_REQUEST_FAILED = 'EUROPEAN_REGIONS_REQUEST_FAILED';

    constructor(private store: Store<any>) { }

    requestAsianRegions() {
        this.store.dispatch(createAction(RegionsActions.ASIAN_REGIONS_REQUESTED));
    }

    requestEuropeanRegions() {
        this.store.dispatch(createAction(RegionsActions.EUROPEAN_REGIONS_REQUESTED));
    }
}

