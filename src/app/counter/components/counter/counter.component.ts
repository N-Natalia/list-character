import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number=10;

  increasedBy(value: number): number{
    return this.counter+=value;
  }
  reset(){
    this.counter=10;
  }

}
