import { Component, OnInit } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private data: MsgService) { }

  ngOnInit(): void {
  }


  msgs = [];
  send(msg: any) {
    this.msgs = this.data.chat(msg);
  }

}
