import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Injectable()
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  goToProfilePage(): void {
    window.open(this.keycloakService.getKeycloakInstance().createAccountUrl(), '_blank');
  }

  getUserRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}
