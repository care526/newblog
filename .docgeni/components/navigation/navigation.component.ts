import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { DocgeniBuiltInComponent } from '@docgeni/template';

import navigationData from './navigationData';
import { MenuItem } from './navigationData/type';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent extends DocgeniBuiltInComponent implements OnInit {
  // @Input() set color(value: string) {
  //   this.hostElement.style.color = value;
  // }
  navigationData: MenuItem[] = navigationData;
  currentMenu = 0;
  currentChildMenu = 0;

  constructor(elementRef: ElementRef<unknown>) {
    super(elementRef);
  }

  ngOnInit(): void {}

  currentMenuChange(index: number): void {
    this.currentMenu = index;
    this.currentChildMenu = 0;
  }

  go(link: string) {
    window.open(link);
  }
}

export default {
  selector: 'navigation',
  component: NavigationComponent,
};
