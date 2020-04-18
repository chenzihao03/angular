import {Component, OnInit} from '@angular/core';
import {routes} from './layout-routing.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  routes = routes;

  constructor() {
  }

  ngOnInit(): void {
  }

}
