import { Component } from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css'],
})
export class FormWrapperComponent {
  isDark: boolean = false;
  isDarkBg: string = '../../../assets/images/icon-sun.svg';
  isLightBg: string = '../../../assets/images/icon-moon.svg';
  toggleBackgroundImage() {
    this.isDark = !this.isDark;
  }
}
