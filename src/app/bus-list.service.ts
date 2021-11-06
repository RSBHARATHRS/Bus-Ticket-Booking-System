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
        imgPath: "../assets/bus1.png",
        rating: 4.5
      },
      {
        name: "mrmtravels",
        from: "chennai",
        to: "Tirunelveli",
        totalSeats: 32,
        bookedSeats: 0,
        availableSeats: 32,
        imgPath: "../assets/bus2.png",
        rating: 3
      }
    ];
    let strForm = [];
    let tempBusList: any = localStorage.getItem("busList");

    //if local storage not exist it will create a storage by default value
    if (!tempBusList) {
      for (let i of this.busLists) {
        strForm.push(JSON.stringify(i));
      }
      localStorage.setItem("busList", strForm.toString());
      console.log("Created bus lis:", this.busLists);
    }
    else {
      console.log("retrived bus list:", JSON.parse("[" + tempBusList + "]"));
    }
  }

  getBusLists() {
    return this.busLists;
  }
}
