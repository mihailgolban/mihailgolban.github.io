import { MatSnackBar } from '@angular/material';
import { ServerService } from './../server.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  Repositories: Object[];
  loading: boolean;
  filterString: string;

  spinnerColor = 'accent';

  constructor(private serverService: ServerService, public errorSnackBar: MatSnackBar) {
    this.loading = true;
    this.GetRepositories();
  }

  ngOnInit() {
  }

  GetRepositories() {
    this.serverService.getData('https://api.github.com/users/mihailgolban/repos')
    .subscribe(
      (repos: Object[]) => { this.Repositories = repos; this.loading = false; },
      () => this.errorSnackBar.open('Couldn\'t load repositories', 'Close', {
        horizontalPosition: 'right',
        verticalPosition: 'top'})
    );
  }
}
