import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicLoginServiceService {

  constructor() { }

  getLoginAccess(username: string, password: string) : boolean {
    if (username === 'alex' && password === 'pass') {
      return true;
    }
    return false;
  }
}
