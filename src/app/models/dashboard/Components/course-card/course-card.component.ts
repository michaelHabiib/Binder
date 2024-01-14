import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../../../../modelss/Course';
import { DashboardService } from '../../Services/dashboard.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input() data!: Course;
  private _index!: number;
  @Input() set index(value: number) {
    this._index = value;
  }
  get index(): number {
    return this._index;
  }
  Courses : Course [] = []
  wishList : Course [] = []
  CartList : Course [] = []
  constructor(private _DashboardService : DashboardService){}

  ngOnInit() {
    this._DashboardService.getCourses().subscribe(value => {
      this.Courses = value
    })
    this.IntilaizeWishAndCartList()
  }
  
  IntilaizeWishAndCartList(){ 
    const wishlist = localStorage.getItem('wishList')
    const carList = localStorage.getItem('cartList')

    if(wishlist){
      this.wishList = JSON.parse(wishlist)
       this._DashboardService.setwishlist(this.wishList)
        
    }else{
       this._DashboardService.getWishList().subscribe(value => {
        this.wishList = value
      })
    }

    if(carList){
      this.CartList = JSON.parse(carList) 
      this._DashboardService.setCart(this.CartList)
    }else{
      this._DashboardService.getCart().subscribe(value => {
        this.CartList = value
      })
    }
  }
  isCourseInWishlist(course: Course): boolean {
    const isCourseInWishList = this.wishList.some(item =>item.id === course.id);
    
    return isCourseInWishList
  }

  removeFirstLetter(price : string) :number  {
    if (typeof price !== 'string' || price.length === 0) {
        // Check if the input is a non-empty string
        return 0;
    }
    return Number(price.substring(1));
  }


  ValidPercentage(percentage : string){
    let discountPercentage = parseFloat(percentage.replace('%', ''));
    
  }

  TogglewishList(course : Course){
    const isCourseInWishList = this.wishList.some(item => item.id === course.id);
    
    if(isCourseInWishList){
      console.log('j=hna');
      
      this.wishList = this.wishList.filter(item => item.id !== course.id  )
      this._DashboardService.setwishlist(this.wishList)
      
    }else{
      console.log(this.wishList);
      
      console.log('msh hna');
      this.wishList.push(course)

      console.log(this.wishList);

      this._DashboardService.setwishlist(this.wishList)

    }
  }
  AddToCart(course : Course){
    const isCourseInCartList = this.CartList.some(item => item.id === course.id);
    console.log(isCourseInCartList);
    
    console.log(this.CartList);
    
    if(isCourseInCartList){
      Swal.fire(`${course.courseName} Course Already in Yor Cart`);
      console.log(`dd${this.CartList}`);
      
    }else{
      
      this.CartList.push(course)
      console.log(this.CartList);
      
      this._DashboardService.setCart(this.CartList)
      Swal.fire(`${course.courseName} Course successfully added in the cart`);
    } 
  }
    
  
}
