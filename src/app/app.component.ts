import { Component } from '@angular/core';
import { DataManagerService } from './services/data-manager/data-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dataMangerServ: DataManagerService){

  }
  title = 'angular-todo';

}
