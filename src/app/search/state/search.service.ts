import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable( {providedIn: 'root'})
export class SearchService {

    constructor(private http: HttpClient) { }

    /**
     * 
     * @param user string
     * @returns Observable<any>
     */
    getGithubUser(user: string): Observable<any> {
        return this.http.get(`${environment.BACKEND_URL}users/${user}`);
    }

}