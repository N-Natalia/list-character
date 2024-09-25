import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  @Output()
  public OnNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    id: '',
    name: '',
    power: 0
  };

  OnSendForm(): void {
    console.log('Sending form');
    console.log(this.newCharacter)
    if(this.newCharacter === null)return;
    /// Emit the new character
    //debugger;
    this.OnNewCharacter.emit(this.newCharacter);
    this.newCharacter = {
      id: '',
      name: '',
      power: 0
    }
  }

}
