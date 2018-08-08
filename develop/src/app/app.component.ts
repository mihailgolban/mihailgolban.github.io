import { Component, ChangeDetectorRef} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavOpened: boolean;
  toolbarOpened: boolean;
  sideMode: string = 'side';
  constructor(private breakpointObserver: BreakpointObserver, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.sidenavOpened = false;
        this.toolbarOpened = true;
        this.sideMode = 'over';
        this.cd.detectChanges();
      } else {
        this.sidenavOpened = true;
        this.toolbarOpened = false;
        this.sideMode = 'side';
        this.cd.detectChanges();
      }
    });
  }
  toogleSidenav(value: boolean) {
    this.sidenavOpened = value;
  }
}
