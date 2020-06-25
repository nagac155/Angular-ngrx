import { State } from "@ngrx/store";
import { Action } from 'rxjs/internal/scheduler/Action';
import { RegionsActions } from '../actions/regions.actions';
import { createDefaultContinents } from '../util/regions.util';

export const regionsReducer = (state = createDefaultContinents(), action) => {
    switch (action.type) {
        case RegionsActions.ASIAN_REGIONS_REQUESTED:
            return {
                ...state,
                asianRegions: {
                    ...state.asianRegions,
                    isLoading: true,
                },
            };
        case RegionsActions.ASIAN_REGIONS_REQUEST_SUCCEEDED:
            return {
                ...state,
                asianRegions: {
                    ...state.asianRegions,
                    isLoading: false,
                    error: null,
                    list: action.payload,
                },
            };
        case RegionsActions.ASIAN_REGIONS_REQUEST_FAILED:
            return {
                ...state,
                asianRegions: {
                    ...state.asianRegions,
                    isLoading: false,
                    error: action.payload.error,
                },
            };
        case RegionsActions.EUROPEAN_REGIONS_REQUESTED:
            return {
                ...state,
                europeanRegions: {
                    ...state.europeanRegions,
                    isLoading: true,
                },
            };
        case RegionsActions.EUROPEAN_REGIONS_REQUEST_SUCCEEDED:
            return {
                ...state,
                europeanRegions: {
                    ...state.europeanRegions,
                    isLoading: false,
                    error: null,
                    list: action.payload,
                },
            };
        case RegionsActions.EUROPEAN_REGIONS_REQUEST_FAILED:
            return {
                ...state,
                europeanRegions: {
                    ...state.europeanRegions,
                    isLoading: false,
                    error: action.payload.error,
                },
            };
    }

 };
