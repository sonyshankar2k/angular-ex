import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemolibraryService {

  constructor() { }

  welcomeMethod(name: string): string {
    return "'Welcome to '" + name + "'";
  }
}
