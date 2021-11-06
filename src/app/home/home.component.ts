import { Component, OnInit, Input } from '@angular/core';
import { BusListService } from '../bus-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  busListObj: any;
  constructor(private busListServic: BusListService) { }

  ngOnInit(): void {
    this.busListObj = this.busListServic.getBusLists();
    console.log("home :", this.busListObj);
  }

}
