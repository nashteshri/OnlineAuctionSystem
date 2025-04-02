import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';
import {io,Socket} from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket:Socket;

  constructor() {
    this.socket = io("http://localhost:3000")
   }
   listen(event:string):Observable<any>{
    return new Observable((subscriber)=>{
      this.socket.on(event,(data)=>subscriber.next(data));
    });
   }
   send(event:string,data:any):void{
    this.socket.emit(event,data);
   }
}
