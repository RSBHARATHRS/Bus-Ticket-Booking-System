import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  @Input() busInfo: any;

  height = "0";
  bgColor: any;
  seatRows = [1, 2, 3, 4, 5, 6, 7, 8];
  seatColums = [1, 2, 3, 4];
  selectedSeatCounts: number;
  constructor() {

    this.busInfo = {
      name: "mrmtravels",
      ac: "none",
      totalSeats: 32,
      bookedSeats: 0,
      availableSeats: 32,
    }

    this.bgColor = [];
    this.selectedSeatCounts = 0;
  }

  ngOnInit(): void {
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
    if (this.bgColor[seatNum] == "green") {
      this.bgColor[seatNum] = "";
      this.selectedSeatCounts--;
      return;
    }

    if (this.selectedSeatCounts == 6) {
      alert("One person can only book upto 6 seats");
      return;
    }
    this.bgColor[seatNum] = "green";
    this.selectedSeatCounts++;
    console.log(this.bgColor);
  }
}
