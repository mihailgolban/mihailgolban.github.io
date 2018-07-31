import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  Repositories: any[];

  constructor(private serverService: ServerService, public errorSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.GetRepositories();
  }

  GetRepositories() {
    this.serverService.getRepositories()
    .subscribe(
      (repos: any[]) => this.Repositories = repos,
      () => this.errorSnackBar.open('Couldn\'t load repositories', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: 'errorSnackBar' })
    );
  }
}
