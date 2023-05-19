import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { DataManagerService } from './services/data-manager/data-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog, public dataMangerServ: DataManagerService){

    }
  title = 'angular-todo';
  openModal(){
    this.dialog.open(TodoAddComponent)
  }
}
