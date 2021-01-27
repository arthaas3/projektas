import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Mokejimas } from 'src/shared/models/mokejimas.models';

@Component({
  selector: 'app-etikete',
  templateUrl: './etikete.component.html',
  styleUrls: ['./etikete.component.scss']
})
export class EtiketeComponent implements OnInit {

  @Input() item: Mokejimas;
  @Output() xClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXclick()
  {
    this.xClick.emit();
  }

}
