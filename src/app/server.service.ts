import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }
  getRepositories() {
    return this.http.get('https://api.github.com/users/mihailgolban/repos').pipe(map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ));
  }
}
