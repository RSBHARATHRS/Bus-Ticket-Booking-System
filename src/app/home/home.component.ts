import { Component, OnInit, Input } from '@angular/core';
import { BookSeatService } from '../book-seat.service';
import { BusListService } from '../bus-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  date: string;
  busListObj: any;
  constructor(private busListServic: BusListService, private busSeatService: BookSeatService) {
    this.date = "";
  }

  ngOnInit(): void {
    this.busListObj = this.busListServic.getBusLists();
    console.log("home :", this.busListObj);
  }

  search(date: any) {
    console.log(date);
    this.busSeatService.selectedDate = date;
  }

}
