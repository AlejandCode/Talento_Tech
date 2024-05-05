import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { error } from 'console';
import { menuRoutes } from '../../menu/menu';
import path from 'path';
import { MenuInfoInterface } from '../../core/interface/menu.info.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuItems: MenuInfoInterface[] = [];

  ngOnInit(): void {
    this.menuItems = menuRoutes;
    console.log(this.menuItems);
  }
}
