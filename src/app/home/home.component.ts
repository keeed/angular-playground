import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms: Room[] = [];

  constructor(public roomService: RoomService) { }

  ngOnInit() {
    console.log('ngOnInit');

    // this.rooms = this.roomService.getRooms();
    this.roomService.getRooms()
      .subscribe({
        next: (rooms) => {
          this.rooms = rooms;
        }
      });

    console.log('!!!!!!!!!!!!!!!!!!');
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

}
