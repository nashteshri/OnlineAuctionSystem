import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';
import { io, Socket } from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    console.log("Websocket service...");

    this.socket = io("http://localhost:300/");
    this.socket.on("connect", () => {
      console.log("WebSocket connected!", this.socket.id);
    });

    this.socket.on("disconnect", () => {
      console.log("WebSocket disconnected!");
    });

    this.socket.on("connect_error", (error) => {
      console.error("WebSocket connection error:", error);
    });
  }


  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => subscriber.next(data));
    });
  }
  send(event: string, data: any): void {
    this.socket.emit(event, data);
  }
}
