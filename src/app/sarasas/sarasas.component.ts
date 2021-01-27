import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Mokejimas } from 'src/shared/models/mokejimas.models';

@Component({
  selector: 'app-sarasas',
  templateUrl: './sarasas.component.html',
  styleUrls: ['./sarasas.component.scss']
})
export class SarasasComponent implements OnInit {

  @Input() Mokejimas: Mokejimas[];
  @Output() delete: EventEmitter<Mokejimas> = new EventEmitter<Mokejimas>();

  constructor() { }

  ngOnInit(): void {
  }

del(item: Mokejimas)
{
this.delete.emit(item);
}

}