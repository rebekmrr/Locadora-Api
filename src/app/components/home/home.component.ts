import {Component, OnInit, Output} from '@angular/core';


class EventEmitter {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  // public onSidenavClose = () => {
  //   this.sidenavClose.emit();
  //
  // }

}
