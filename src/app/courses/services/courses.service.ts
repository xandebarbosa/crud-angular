import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'   //A instância da classe vai ser fornecida na raiz do projeto de forma global
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular 11', category: 'Angular 11 Course' },
      { _id: '2', name: 'Angular 12', category: 'Angular 12 Course' },
      { _id: '3', name: 'Angular 13', category: 'Angular 13 Course' }
    ];
  }
}
