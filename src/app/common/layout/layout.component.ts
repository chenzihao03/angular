import {Component, OnInit} from '@angular/core';
import {routes} from '../../app-routing.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = true;
  routes = routes;
  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.visible = false;
  }
}
