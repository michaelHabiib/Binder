import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../Services/dashboard.service';
import { Course } from '../../../../modelss/Course';
import { HttpClient } from '@angular/common/http';
import { HandleTimeLeftService } from '../../Services/handle-time-left.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  courseId!: number;
  courses : Course[] = []
  course !: Course | undefined 

  constructor(private route: ActivatedRoute,
     private  _DashboardService : DashboardService,
     private http: HttpClient,
     protected _HandleTimeLeftService: HandleTimeLeftService) {}

  ngOnInit(): void {
    // Subscribe to the route params to get the value of 'id' when the route changes
    this.route.params.subscribe((params) => {
      // Access the 'id' parameter from the route
      this.courseId = +params['id']; // The '+' is used to convert the parameter to a number if it's a string
      console.log('Course ID:', this.courseId);
      this._DashboardService.GetCourses().subscribe(value => {
        this.courses = value
        const coursesWithIds = this._DashboardService.addUniqueIdsToCourses(this.courses);
        console.log(coursesWithIds);
        
        this.course = coursesWithIds.find(course => course.id === this.courseId)
        console.log(this.course);
        
      })
    });
  }
  removeFirstLetter(price : string | undefined) :number  {
    if (typeof price !== 'string' || price.length === 0) {
        // Check if the input is a non-empty string
        return 0;
    }
    return Number(price.substring(1));
  }
}
