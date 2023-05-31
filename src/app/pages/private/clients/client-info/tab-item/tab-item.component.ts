import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
})
export class TabItemComponent {
  @Input('tabTitle') title: string = '';
  @Input() active = false;
}
