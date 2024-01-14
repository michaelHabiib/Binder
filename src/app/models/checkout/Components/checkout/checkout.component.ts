import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard/Services/dashboard.service';
import { Course } from '../../../../modelss/Course';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  Courses: Course[] = []
  wishList: Course[] = []
  dataSource = new MatTableDataSource<Course>([])
  displayedColumns: string[] = ['name', 'author', 'price', 'saving', 'action'];

  constructor(private _DashboardService: DashboardService) { }
  ngOnInit(): void {
    this._DashboardService.getCart().subscribe(value => {
      this.Courses = value
      this.dataSource = new MatTableDataSource(value)
    })
    this._DashboardService.getWishList().subscribe(value => {
      this.wishList = value
    })
  }

  removeFirstLetter(price: string): number {
    if (typeof price !== 'string' || price.length === 0) {
      // Check if the input is a non-empty string
      return 0;
    }
    return Number(price.substring(1));
  }
  getTotalCost() {
    return this.Courses.map(t => t.priceAfterDiscount).reduce((acc, value) => acc + value, 0);
  }

  getTotalSaving() {

    return this.Courses.reduce((acc, course) => acc + (this.removeFirstLetter(course.actualPrice) - course.priceAfterDiscount), 0);;
  }

  TogglewishList(course: Course) {
    const isCourseInWishList = this.wishList.some(item => item.id === course.id);

    if (isCourseInWishList) {

      this.wishList = this.wishList.filter(item => item.id !== course.id)

      this._DashboardService.setwishlist(this.wishList)

    } else {
      this.Courses = this.Courses.filter(item => course.id !== item.id)
      this._DashboardService.setCart(this.Courses)
      this.wishList.push(course)
      this._DashboardService.setwishlist(this.wishList)

    }
  }

  isCourseInWishlist(course: Course): boolean {
    const isCourseInWishList = this.wishList.some(item => item.id === course.id);

    return isCourseInWishList
  }
  removeFromCart(id: number) {
    this.Courses = this.Courses.filter(item => id !== item.id)
    this._DashboardService.setCart(this.Courses)
  }

  checkout() {
    Swal.fire({
      text: "Please Confirm your Order",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.Courses = []
        this._DashboardService.setCart(this.Courses)
      } else if (result.isDenied) {
        Swal.close()
      }
    });
  }


}
