import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navLinks = [{name: 'Projects', link: '/projects', icon: 'home'},
              {name: 'About me', link: '/about', icon: 'account'},
              {name: 'Contact me', link: '/contact', icon: 'email'}];
  socialIcons = [{link: 'https://twitter.com/mihailgolban', icon: 'twitter'},
                 {link: 'https://www.facebook.com/mihaillgolban', icon: 'facebook'},
                 {link: 'https://github.com/mihailgolban', icon: 'github-circle'},
                 {link: 'https://www.linkedin.com/in/mihail-golban-b670b414a/', icon: 'linkedin'}];
  constructor() {}

  ngOnInit() {
  }

}
