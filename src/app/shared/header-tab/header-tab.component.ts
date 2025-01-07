import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  standalone: false,
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss'],
})
export class HeaderTabComponent  implements OnInit {
  @Input() titulua:string="";
  constructor() { }

  ngOnInit() {}

}
