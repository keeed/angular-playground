import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Room Reservation';

  constructor() {

  }

  ngOnInit() {
  }
}
