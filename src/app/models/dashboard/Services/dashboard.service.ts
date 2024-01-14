import { Injectable } from '@angular/core';
import { Course } from '../../../modelss/Course';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CalculateDiscountService } from './calculate-discount.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient,
    private _CalculateDiscountService: CalculateDiscountService) { }
  private CoursesSubject = new BehaviorSubject<Course[]>([]); // Initial value is an empty string
  private WishListSubject = new BehaviorSubject<Course[]>([]); // Initial value is an empty string
  private CartSubject = new BehaviorSubject<Course[]>([]); // Initial value is an empty string

  setCourses(Course: Course[]): void {
    this.CoursesSubject.next(Course);
  }
  getCourses(): Observable<Course[]> {
    return this.CoursesSubject.asObservable();
  }


  setwishlist(Courses: Course[]): void {
    localStorage.setItem('wishList', JSON.stringify(Courses))
    this.WishListSubject.next(Courses);
  }
  getWishList(): Observable<Course[]> {
    const storedWishList = localStorage.getItem('wishList');

    if (storedWishList) {
      const parsedWishList = JSON.parse(storedWishList);
      this.setwishlist(parsedWishList);
    }
    return this.WishListSubject.asObservable();
  }


  setCart(Courses: Course[]): void {
    localStorage.setItem('cartList', JSON.stringify(Courses))
    this.CartSubject.next(Courses);
  }
  getCart(): Observable<Course[]> {
    const storedCart = localStorage.getItem('cartList');

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      this.setCart(parsedCart);
    }
    return this.CartSubject.asObservable();
  }
  GetCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('assets/Data/data.json');
  }

  public addUniqueIdsToCourses(coursesData: any[]): any[] {
    let uniqueIdCounter = 1;

    return coursesData.map(courseData => {
      // Add a unique id property to each course
      courseData['id'] = uniqueIdCounter++;
      Number(courseData.actualPrice)
      const price = this.removeFirstLetter(courseData.actualPrice)
      const percaentage = this._CalculateDiscountService.calculateDiscountPercentage(courseData.discountPercentage)
      courseData['priceAfterDiscount'] = (price * (100 - percaentage)) / 100;
      return courseData;
    });
  }

  removeFirstLetter(price: string): number {
    if (typeof price !== 'string' || price.length === 0) {
      // Check if the input is a non-empty string
      return 0;
    }
    return Number(price.substring(1));
  }


}
