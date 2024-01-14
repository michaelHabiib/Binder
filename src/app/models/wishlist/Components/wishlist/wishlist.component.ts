import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../../../../modelss/Course';
import { DashboardService } from '../../../dashboard/Services/dashboard.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {

  Courses : Course[] = []
  wishList : Course[] = []
  cart : Course[] = []
  dataSource  =  new MatTableDataSource<Course>([])
  displayedColumns: string[] = ['name', 'author', 'goals', 'action'];

  constructor(private _DashboardService : DashboardService){}
  ngOnInit(): void {

    this._DashboardService.getCart().subscribe(value => {
      this.cart = value
    })
    this._DashboardService.getWishList().subscribe(value => {
      this.wishList = value
      this.dataSource = new MatTableDataSource(this.wishList)
    })
  }

  isCourseInCartt(course: Course): boolean {
    const isCourseInCart = this.cart.some(item =>item.id === course.id);
    
    return isCourseInCart
  }

  removeFromWishlist(id : number){
    this.wishList = this.wishList.filter( item => id !== item.id)
    this._DashboardService.setwishlist(this.wishList)
  }

  AddToCart(course : Course){
      this.cart.push(course)
      this._DashboardService.setCart(this.cart)
  }

}
