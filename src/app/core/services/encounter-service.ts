import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenerateEncounterDTO} from '../../features/encounter/interface/generate-encounter-dto';

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  private readonly url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = ""
  }

  public generate(generateEncounterDTO: GenerateEncounterDTO) {
    return this.http.post<GenerateEncounterDTO>(this.url+'/generate',generateEncounterDTO)
  }
}
