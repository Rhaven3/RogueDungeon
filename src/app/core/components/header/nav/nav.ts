import {Component, input, output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Creature} from '../../../../features/creature/creature';
import {AuthService} from '../../../services/auth-service';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  username = input.required<string>()
  logoutEvent = output<string>() // new EventEmitter<void>()


  constructor(
    protected authService: AuthService,
  ) {}

  public logout() {
    this.logoutEvent.emit("coucou tout court");
  }

  protected readonly Creature = Creature;
}
