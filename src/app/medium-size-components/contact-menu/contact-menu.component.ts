import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.scss'],
})
export class ContactMenuComponent implements OnInit {
  @Input() linkHoverColor ="white";
  constructor() {}

  ngOnInit(): void {}
}
