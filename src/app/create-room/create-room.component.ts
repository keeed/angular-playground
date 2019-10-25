import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  @Output()
  room: EventEmitter<Room> = new EventEmitter<Room>();

  constructor() { }

  ngOnInit() {
  }

  addRoom(name: string, capacity: number) {
    const room = new Room(0, name, capacity);
    this.room.emit(room);
  }
}
