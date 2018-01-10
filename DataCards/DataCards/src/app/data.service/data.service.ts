import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  private url = 'data/getdata?search=';
  data: any;

  constructor(private http: Http) {}

  getData(searchTerm: string) {
    return this.http.get(this.url + searchTerm)
          .map((res: Response) => res.json());
  }
}
