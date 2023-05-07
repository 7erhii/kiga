import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDropdown = false;
  isActive = false;

  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  @ViewChild('headerPopup', { static: false }) headerPopup!: ElementRef;

  toggleHeaderPopup() {
    const searchInput = this.searchInput.nativeElement;
    const headerPopup = this.headerPopup.nativeElement;
    if (searchInput === document.activeElement) {
      headerPopup.style.display = 'block';
    } else {
      headerPopup.style.display = 'none';
    }
  }

  onDropdownToggle(event: Event) {
    event.preventDefault();
    this.isDropdown = !this.isDropdown;
  }

  onBurgerClick() {
    this.isActive = !this.isActive;
  }
}
