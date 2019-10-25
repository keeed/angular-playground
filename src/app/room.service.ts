import { Injectable } from '@angular/core';
import { Room } from './room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomUrl = 'http://5db29ac4e9751d0014cd03ef.mockapi.io/Rooms';

  rooms = [
    new Room(0, 'Apple', 5),
    new Room(1, 'Orange', 6),
    new Room(2, 'Banana', 10)
  ];

  constructor(public http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    // return this.rooms;
    return this.http.get<Room[]>(this.roomUrl)
      .pipe(
        tap(_ => console.log('Received data'))
      );
  }

  getRoom(id: number): Observable<Room>{
    return this.http.get<Room>(this.roomUrl + `/${id}`);
  }
}
