import {EncounterDifficultyEnum} from '../enums/encounter-difficulty-enum';

export interface GenerateEncounterDTO {
  difficulty: EncounterDifficultyEnum;
  partySize: number;
  partyAverageLvl: number;
  numberCreatures: number;
}
