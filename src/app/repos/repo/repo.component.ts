import { ServerService } from './../../server.service';
import { Component, OnInit, Input } from '@angular/core';
import * as data from './../../../assets/colors.json';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() repo: Object;
  languages = new Array<{name: string, color: string}>();

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.getLanguages();
  }

  created_at(): string {
    const time = this.repo['created_at'];
    return time.substring(0, time.indexOf('T'));
  }

  getLanguages() {
      this.serverService.getData(this.repo['languages_url'])
      .subscribe(
        (languages) => {
          const langs: string[] = Object.keys(languages);
          langs.forEach((item) => this.languages.push({name: item, color: data[item].color}));
        }
      );
  }
}
