import { Injectable } from '@angular/core';
import { BusListService } from './bus-list.service';

@Injectable({
  providedIn: 'root'
})

export class BookSeatService {
  busList: any;
  seatsArr: any;
  constructor(private busListService: BusListService) {
    this.busList = busListService.getBusLists();

    console.log("msg from servic2", this.busList);

    this.seatsArr = [];
  }

  getSeats(busName: any): any {
    let tempSeats = localStorage.getItem(busName);

    if (!tempSeats) {
      localStorage.setItem(busName, this.seatsArr.toString());
      return this.seatsArr;
    }
    this.seatsArr = tempSeats.split(",");
    console.log("retrived seats:", this.seatsArr);
    return this.seatsArr;
  }

  updateSeats(busName: string, seats: any) {
    for (let i = 0; i < seats.length; i++) {
      if (seats[i] == "orange") {
        seats[i] = "green";
      }
    }
    this.seatsArr = seats;
    this.updateLocalStorage(busName);
  }

  updateLocalStorage(busName: string) {
    localStorage.setItem(busName, this.seatsArr.toString());
  }
}
