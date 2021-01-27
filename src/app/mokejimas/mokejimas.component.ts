import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mokejimas } from 'src/shared/models/mokejimas.models';

@Component({
  selector: 'app-mokejimas',
  templateUrl: './mokejimas.component.html',
  styleUrls: ['./mokejimas.component.scss']
})
export class MokejimasComponent implements OnInit {

  @Input() item: Mokejimas = new Mokejimas('', null);
  @Output() formSubmit: EventEmitter<Mokejimas> = new EventEmitter<Mokejimas>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
