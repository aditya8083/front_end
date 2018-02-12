import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tiket';

  constructor() {

  }

  ngOnInit() {

  }
}

declare global {
  interface Date {
    toISOLocaleString(): string;
  }
}


Date.prototype.toLocaleDateString = function (): string {
  return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate();
};


