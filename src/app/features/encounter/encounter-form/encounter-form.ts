import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {GenerateEncounterDTO} from '../interface/generate-encounter-dto';
import {EncounterDifficultyEnum} from '../enums/encounter-difficulty-enum';

@Component({
  selector: 'app-encounter-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './encounter-form.html',
  styleUrl: './encounter-form.scss',
})
export class EncounterForm {
  difficultyOptions = Object.entries(EncounterDifficultyEnum)
    .filter(([key]) => Number.isNaN(Number(key)))
    .map(([key, value]) => ({
    value: value as EncounterDifficultyEnum,
    label: key,
  }));

  protected generation: GenerateEncounterDTO;
    protected form: FormGroup;

  constructor() {
    this.generation = {difficulty: EncounterDifficultyEnum.EASY, numberCreatures: 0, partyAverageLvl: 0, partySize: 0};
    this.form = new FormGroup({
      difficulty: new FormControl(null, [Validators.required]),
      numberCreatures: new FormControl(null, [Validators.required]),
      partyAverageLvl: new FormControl(null, [Validators.required]),
      partySize: new FormControl(null, [Validators.required]),
    })
  }

  protected submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    } else {
      this.form.markAllAsTouched();
    }
  }
}
