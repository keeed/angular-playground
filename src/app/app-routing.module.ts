import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  // {
  //   path: '', redirectTo: '/home', pathMatch: 'full'
  // }
  // {
  //   path: 'create-room', component: CreateRoomComponent
  // }
  {
    path: 'room-detail/:id', component: RoomDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
