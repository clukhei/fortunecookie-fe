import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";

//const SERVER = 'http://localhost:3000/api/cookie'
const SERVER = 'api/cookie'

export interface CookieText {
    cookie: string;
}

@Injectable()

export class CookieService {
    constructor(private http: HttpClient) { }

   async getCookies(count: number): Promise<CookieText[]> {
   
        const query = (new HttpParams()).set('count', count.toString())
       const resp = await this.http.get<any>(SERVER, {params: query})
            .toPromise()

    if (count == 1) {
        return [resp as CookieText]
    }
        return resp as CookieText[]
    }
}