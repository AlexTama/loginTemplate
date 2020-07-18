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
    console.log(this.helloEnpoint);
    
    this.httpClient.get('/hello').subscribe(data => {
      console.log(data);
      
    });
  }
}
