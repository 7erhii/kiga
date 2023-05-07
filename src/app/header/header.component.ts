// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDropdown = false;
  isActive = false;

  onDropdownToggle(event: Event) {
    event.preventDefault();
    this.isDropdown = !this.isDropdown;
  }

  onBurgerClick(){
    this.isActive = !this.isActive;
  }

}
