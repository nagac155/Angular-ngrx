import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRegion } from '../util/region.interface';


@Injectable()
export class RegionsService {
    constructor(private http: HttpClient) {   }

    getAsianRegions(): Observable<Array<IRegion>> {
        return this.http.get('https://restcountries.eu/rest/v2/region/asia') as Observable<Array<IRegion>>;
    }

    getEuropeanReagions() {
        return this.http.get('https://restcountries.eu/rest/v2/region/europe');
    }
}
