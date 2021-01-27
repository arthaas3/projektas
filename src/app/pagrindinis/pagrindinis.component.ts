import { Component, OnInit } from '@angular/core';
import { Mokejimas } from 'src/shared/models/mokejimas.models';

@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.scss']
})
export class PagrindinisComponent implements OnInit {

  Mokejimas: Mokejimas[] = new Array<Mokejimas>();
  pinigai: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: Mokejimas)
  {
    this.Mokejimas.push(newItem);
    this.pinigai += newItem.suma;
  }

  deleteItem(item: Mokejimas)
  {
    let index = this.Mokejimas.indexOf(item);
    this.Mokejimas.splice(index, 1);
    this.pinigai -= item.suma;
  }

}
