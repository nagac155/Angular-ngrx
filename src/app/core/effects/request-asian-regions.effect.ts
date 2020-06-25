import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { RegionsService } from '../services/regions.service';
import { createAction } from '../util/create-action.util';
import { RegionsActions } from '../actions/regions.actions';
import { IRegion } from '../util/region.interface';

@Injectable()
export class RequestAsianRegionsEffect {

constructor(
    private actions$: Actions,
    private regionsService: RegionsService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType(RegionsActions.ASIAN_REGIONS_REQUESTED),
    switchMap((action) => this.regionsService.getAsianRegions().pipe(
        map((result: IRegion[]) => createAction(RegionsActions.ASIAN_REGIONS_REQUEST_SUCCEEDED, result)),
        catchError((error: ErrorEvent) => of(createAction(RegionsActions.ASIAN_REGIONS_REQUEST_FAILED, { error })))),
    )));
}
