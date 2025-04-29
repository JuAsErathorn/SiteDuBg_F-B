import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../pages/Animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  apiURL: string = "http://localhost:8080/back/api";

  apiAnimal: string = this.apiURL + "/animal";

  animalList: Animal[];

  constructor(private http : HttpClient) {
    this.animalList = [];
  }

  getAnimals(): Observable<Animal[]> {
    //const url = `${this.apiAnimal}`
    return this.http.get<Animal[]>(this.apiAnimal);
  }

}
