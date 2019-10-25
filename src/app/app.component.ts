import { Component, OnInit } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Room Reservation';
  showDetails = true;

  rooms = [
    new Room(0, 'Apple', 5),
    new Room(1, 'Orange', 6),
    new Room(2, 'Banana', 10)
  ];

  ngOnInit() {
    console.log('ngOnInit');
  }

  addRoom(name: string, capacity: number) {
    this.rooms.push(new Room(this.rooms.length, name, capacity));
  }

  toggleDetailsVisibility() {
    this.showDetails = !this.showDetails;
  }
}
