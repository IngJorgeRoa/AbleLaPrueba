import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
      this.items = [
       
    ];
  }

}
