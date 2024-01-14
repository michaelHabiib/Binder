import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../Services/dashboard.service';
import { Course } from '../../../../modelss/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrl: './cart-widget.component.css'
})
export class CartWidgetComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price'];
  @Output() childEvent = new EventEmitter<void>();
  Courses: Course[] = []

  constructor(private _DashboardService: DashboardService,
    private router: Router) { }
  dataSource = new MatTableDataSource<Course>([]);
  ngOnInit(): void {
    this._DashboardService.getCart().subscribe(value => {
      this.Courses = value
      this.dataSource = new MatTableDataSource(value)
    })
  }

  ViewCart() {
    // Emit the event to trigger the function in the parent component
    this.childEvent.emit();
  }

  getTotalCost() {
    return this.Courses.map(t => t.priceAfterDiscount).reduce((acc, value) => acc + value, 0);
  }
  navigateToChaeckout() {
    this.router.navigate(['/checkout'])
  }

}
