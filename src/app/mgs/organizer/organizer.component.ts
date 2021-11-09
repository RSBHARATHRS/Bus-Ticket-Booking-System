import { Component, OnInit } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private data: MsgService) { }

  ngOnInit(): void {
  }
  msgs = []

  send(msg: any) {

    this.msgs = this.data.chat(msg);

  }

}
