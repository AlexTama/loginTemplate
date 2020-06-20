import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicLoginServiceService {

  helloEnpoint = environment.backend + "hello";

  constructor(private httpClient: HttpClient) { }

  public getLoginAccess(username: string, password: string){


    this.httpClient.get(this.helloEnpoint).subscribe(res => {
      console.log(res);    
    });

    // if (username === 'alex' && password === 'pass') {
    //   return true;
    // }
    // return false;
  }
}
