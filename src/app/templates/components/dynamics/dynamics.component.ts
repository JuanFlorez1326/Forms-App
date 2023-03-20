import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  user: User = {
    name:'Juan Florez',
    games: [
      {
        id: 1, nameGame: 'Metal Gear'
      },
      {
        id: 2, nameGame: 'Death Stranding'
      }
    ]
  }

  save() {

  }
}
