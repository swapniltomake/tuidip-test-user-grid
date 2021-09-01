import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-grid-list-item',
  templateUrl: './user-grid-list-item.component.html',
  styleUrls: ['./user-grid-list-item.component.scss']
})
export class UserGridListItemComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
