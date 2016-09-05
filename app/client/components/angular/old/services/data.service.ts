import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }
    
    getCustomers() {
        return this.http.get('/src/customers.json')
                        .map((res: Response) => res.json());
    }

}
