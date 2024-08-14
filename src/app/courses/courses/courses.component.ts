import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  constructor() { }
  ngOnInit(): void {

  }
}
