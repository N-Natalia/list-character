import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 10220
    }
  ];

  constructor() { }

  OnNewCharacter(character: Character): void {
    const newCharacter: Character = {id: uuid(),...character};

    this.characters.push(newCharacter);
  }
  OnDeleteById(id: string): void {
    //Delete character by id
    this.characters = this.characters.filter(character => character.id !== id);

  }
}
