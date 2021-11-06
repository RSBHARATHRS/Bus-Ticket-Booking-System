import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusListService {

  busLists: any;
  constructor() {
    this.busLists = [
      {
        name: "srmtravels",
        from: "chennai",
        to: "nagercoil",
        totalSeats: 32,
        bookedSeats: 0,
        availableSeats: 32,
        imgPath: "../assets/bus1.png"
      },
      {
        name: "mrmtravels",
        from: "chennai",
        to: "Tirunelveli",
        totalSeats: 32,
        bookedSeats: 0,
        availableSeats: 32,
        imgPath: "../assets/bus2.png"
      }
    ]
  }

  getBusLists() {
    return this.busLists;
  }
}
