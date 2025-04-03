import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    this.socket = io("http://localhost:3000"); //Connecting to backend WebSocket
  }

  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        //console.log(`Received WebSocket event: ${event}`, data);
        subscriber.next(data);
      });
    });
  }

  send(event: string, data: any): void {
    console.log(`Sending WebSocket Event: ${event}`, data);
    this.socket.emit(event, data);
  }
}
