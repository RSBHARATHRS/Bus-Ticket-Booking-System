import { Component, OnInit, Input } from '@angular/core';
import { BookSeatService } from '../book-seat.service';
import { BusListService } from '../bus-list.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  @Input() busInfo: any;

  height = "0";
  seats: any;
  seatsOnStorage: any;
  seatRows = [1, 2, 3, 4, 5, 6, 7, 8];
  seatColums = [1, 2, 3, 4];
  selectedSeatCounts: number;

  constructor(private bookSeatService: BookSeatService, private busListService: BusListService) {
    this.selectedSeatCounts = 0;
    this.seats = "";
    this.selectedSeatCounts = 0;

  }

  ngOnInit(): void {
    this.seatsOnStorage = this.bookSeatService.getSeats(this.busInfo.name);
    this.seats = this.seatsOnStorage;
    this.updateSeatCount();
  }

  expand() {
    if (this.height == "0") {
      this.height = "320px";
    } else {
      this.height = "0";
    }
    console.log(this.busInfo);
  }

  select(seatNum: any) {
    if (this.seatsOnStorage[seatNum] == "green") {
      alert("alredy booked");
      return;
    }
    if (this.seats[seatNum] == "orange") {
      this.seats[seatNum] = "";
      this.selectedSeatCounts--;
      return;
    }
    if (this.selectedSeatCounts == 6) {
      alert("One person can only book upto 6 seats");
      return;
    }
    this.seats[seatNum] = "orange";
    this.selectedSeatCounts++;
    console.log(this.seats);
  }

  bookTicket() {
    this.bookSeatService.updateSeats(this.busInfo.name, this.seats);
    this.busInfo.availableSeats -= this.selectedSeatCounts;
    this.busInfo.bookedSeats += this.selectedSeatCounts;

    this.selectedSeatCounts = 0;
  }

  updateSeatCount() {
    for (let i of this.seatsOnStorage) {
      if (i == "green") {
        this.busInfo.availableSeats--;
        this.busInfo.bookedSeats++;
      }
    }
  }
}
