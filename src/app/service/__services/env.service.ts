import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  readonly root:string= 'http://localhost:8080'

}
