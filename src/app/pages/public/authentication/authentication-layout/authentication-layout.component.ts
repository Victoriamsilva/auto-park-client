import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrls: ['./authentication-layout.component.scss'],
})
export class AuthenticationLayoutComponent {
  @Input() subtitle: string = '';
}
