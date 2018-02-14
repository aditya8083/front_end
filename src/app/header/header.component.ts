import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  checkPnrStatus(value: string) {
    this.router.navigate(['history', 'flight', 'superPnr', value]);
  }
}
