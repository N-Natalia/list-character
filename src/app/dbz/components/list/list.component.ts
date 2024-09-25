import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() characterList: Character[] = [];
  @Output()
  public OnIndexCharacter: EventEmitter<string> = new EventEmitter();

  OnDeleteCharacter(id?: string): void {
    //DONE: Emit the character ID
    console.log("index: ",id);
    if(id === null)return;
    this.OnIndexCharacter.emit(id);

  }

}
