import {Component} from '@angular/core';
import {EncounterForm} from './encounter-form/encounter-form';
import {EncounterStats} from './encounter-stats/encounter-stats';

@Component({
  selector: 'app-encounter',
  imports: [
    EncounterForm,
    EncounterStats
  ],
  templateUrl: './encounter.html',
  styleUrl: './encounter.scss',
})
export class Encounter {
  public creatures: any[];


  constructor() {
    this.creatures = []
  }
}
