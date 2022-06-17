import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  @Input()
 dest: string = "Welcome!";

  constructor() { }

  ngOnInit(): void {
  }

}
