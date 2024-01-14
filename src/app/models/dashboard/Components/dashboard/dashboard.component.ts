import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { PasswordDialogComponent } from '../../password-dialog/password-dialog.component';
import { Course } from '../../../../modelss/Course';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DashboardService } from '../../Services/dashboard.service';
import { Event } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { CalculateDiscountService } from '../../Services/calculate-discount.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  courses: Course[] = []
  CoursesTDisplay: Course[] = []
  filteredCourses: Course[] = []

  pageSizeOptions: number[] = [3, 6, 9]; // Customize the available page size options
  pageSize: number = 3;
  pageIndex: number = 0
  DataLength: number = 0
  searchTerm: string = '';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isCartExpanded: boolean = false

  constructor(private dialog: MatDialog,
    private http: HttpClient,
    private _DashboardService: DashboardService,
    private _CalculateDiscountService: CalculateDiscountService) { }

  ngOnInit(): void {
    this._DashboardService.GetCourses().subscribe(data => {
      this.courses = data;
      const coursesWithIds = this._DashboardService.addUniqueIdsToCourses(data);
      this.CoursesTDisplay = coursesWithIds.slice(this.pageIndex, this.pageSize)
      this._DashboardService.setCourses(this.CoursesTDisplay)
      this.filteredCourses = this.CoursesTDisplay;

    });
  }
  // private addUniqueIdsToCourses(coursesData: any[]): any[] {
  //   let uniqueIdCounter = 1;

  //   return coursesData.map(courseData => {
  //     // Add a unique id property to each course
  //     courseData['id'] = uniqueIdCounter++;
  //     Number(courseData.actualPrice)
  //     const price = this.removeFirstLetter(courseData.actualPrice)
  //     const percaentage = this._CalculateDiscountService.calculateDiscountPercentage(courseData.discountPercentage) 
  //     courseData['priceAfterDiscount'] = (price* (100 - percaentage))/ 100;
  //     return courseData;
  //   });
  // }
  // setupPaginator(): void {
  //   this.paginator.pageSize = this.pageSize;
  //   this.paginator.pageIndex = 0;
  //   this.paginator.length = this.courses.length;
  // }
  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize
    if (e.pageIndex >= this.pageIndex) {
      this.pageIndex++
      const PerviousLength = this.CoursesTDisplay.length
      const courserHelper = this.courses.slice(PerviousLength, PerviousLength + e.pageSize)
      this.CoursesTDisplay.push(...courserHelper)
      this.filteredCourses = this.CoursesTDisplay
      this._DashboardService.setCourses(this.CoursesTDisplay)
    } else if (e.pageIndex <= this.pageIndex) {
      this.pageIndex--
      this.CoursesTDisplay.splice(this.CoursesTDisplay.length - e.pageSize, e.pageSize);
      this._DashboardService.setCourses(this.CoursesTDisplay)
      this.filteredCourses = this.CoursesTDisplay
    }
  }

  updateFilteredCourses() {
    this.filteredCourses = this.CoursesTDisplay.filter((course) =>
      this.courseMatchesSearch(course)
    );
  }

  // Check if the course matches the search term either in courseName or tags
  private courseMatchesSearch(course: any): boolean {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();

    // Check course name
    if (course.courseName.toLowerCase().includes(lowerCaseSearchTerm)) {
      return true;
    }

    // Check tags array
    if (course.tags.some((tag: any) => tag.toLowerCase().includes(lowerCaseSearchTerm))) {
      return true;
    }

    return false;
  }

  removeFirstLetter(price: string): number {
    if (typeof price !== 'string' || price.length === 0) {
      // Check if the input is a non-empty string
      return 0;
    }
    return Number(price.substring(1));
  }
  sortCoursesByPriceHelper(sortWay: number): Course[] {
    if (sortWay == 0) {
      return this.filteredCourses.slice().sort((a, b) => this.removeFirstLetter(a.actualPrice) - this.removeFirstLetter(b.actualPrice));
    } else {
      return this.filteredCourses.slice().sort((a, b) => this.removeFirstLetter(b.actualPrice) - this.removeFirstLetter(a.actualPrice));
    }
  }

  sortCourses(event: any) {
    const value = event.value as number
    this.filteredCourses = this.sortCoursesByPriceHelper(value);
  }

  ViewCart() {
    this.isCartExpanded = !this.isCartExpanded
  }
}
