import { Component, Input } from '@angular/core';
import { PERMISSION_REQUIRED, UNAUTHORISED_ERROR_MESSAGE, SERVICE_DESK_TO_ENABLE_ACCESS, ROUTE_HOME } from 'src/app/constants/constant';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  @Input('errorTitle') errorTitle: string = PERMISSION_REQUIRED;
  @Input('errorMessage') errorMessage: string = UNAUTHORISED_ERROR_MESSAGE;
  @Input('contactMessage') contactMessage: string = SERVICE_DESK_TO_ENABLE_ACCESS;

  window: Window = window;
  routeHome = ROUTE_HOME

  goToHomePage() {
    this.window.location.href = this.routeHome;
  }
}
