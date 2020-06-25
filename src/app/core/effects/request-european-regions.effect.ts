import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { RegionsService } from '../services/regions.service';
import { createAction } from '../util/create-action.util';
import { RegionsActions } from '../actions/regions.actions';

@Injectable()
export class RequestEuropeanRegionsEffect {

constructor(
    private actions$: Actions,
    private regionsService: RegionsService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType(RegionsActions.EUROPEAN_REGIONS_REQUESTED),
    switchMap((action) => this.regionsService.getEuropeanReagions().pipe(
        map((result: Observable<any>) => createAction(RegionsActions.EUROPEAN_REGIONS_REQUEST_SUCCEEDED, result)),
        catchError((error: ErrorEvent) => of(createAction(RegionsActions.EUROPEAN_REGIONS_REQUEST_FAILED, { error })))),
    )));
}
