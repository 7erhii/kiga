import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit() {
    console.log(1);
    const defaultWidth = 1728,
      defaultFont = 16,
      mobileFont = 16,
      minWidth = 768,
      minHeight = 600,
      defaultHeight = 900;

    function fSize(device: boolean, vW: number, vH: number) {
      if (vW <= 374) {
        return 13;
      }

      return device
        ? mobileFont
        : defaultFont *
            Math.min(
              Math.max(minWidth, vW) / defaultWidth,
              Math.max(minHeight, vH) / defaultHeight
            );
    }

    function modifierDevice() {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var isMobile = windowWidth <= 767;

      if (document.body) {
        document.body.style.fontSize =
          fSize(isMobile, windowWidth, windowHeight) + 'px';
      }

      if (isMobile) {
        document.documentElement.classList.add('mobile');
      } else {
        document.documentElement.classList.remove('mobile');
      }
    }

    window.onload = function () {
      modifierDevice();
    };

    window.onresize = function () {
      modifierDevice();
    };

    modifierDevice();
  }
}
