import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }
  msgs: any;

  chatMsg: any = [];



  chat(msg: any) {

    this.chatMsg.push(msg)

    return this.chatMsg;

  }
}
