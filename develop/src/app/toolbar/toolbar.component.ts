import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() sidenavEvent = new EventEmitter<boolean>();
  sidenavOpen: boolean;

  toogleSidenav() {
    this.sidenavEvent.emit(!this.sidenavOpen);
  }
}
