import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit() { }
  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.OnDeleteById(id);
  }
  onNewCharacter(character: Character): void {
    this.dbzService.OnNewCharacter(character);
  }


}
