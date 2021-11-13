import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { BookSeatService } from '../book-seat.service';

@Component({
  selector: 'app-user-details-input',
  templateUrl: './user-details-input.component.html',
  styleUrls: ['./user-details-input.component.css']
})


export class UserDetailsInputComponent implements OnInit, OnChanges {

  @Input() amount: any;

  selectedDate: string;
  constructor(private busSeatService: BookSeatService) {
    this.selectedDate = "";
  }

  ngOnInit(): void {
    console.log("passed Iput:", this.amount);
    this.selectedDate = this.busSeatService.selectedDate;
  }

  ngOnChanges(): void {

  }

}


