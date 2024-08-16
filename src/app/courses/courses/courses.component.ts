import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: "1", name: "Angular", category: "Basic"}
  ];
  displayedColumns = ['name', 'category'];

  coursesService: CoursesService;

  constructor() {
    this.coursesService = new CoursesService();  //modelo de injeção de dependencies
    this.courses = this.coursesService.list();
   }
  ngOnInit(): void {

  }
}
