import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() myid: string = "001";
  @Input() title: string = "Welcome!";

  constructor() { }

  ngOnInit(): void {
  }

}
