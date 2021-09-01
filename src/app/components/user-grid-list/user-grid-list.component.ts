import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-grid-list',
  templateUrl: './user-grid-list.component.html',
  styleUrls: ['./user-grid-list.component.scss']
})
export class UserGridListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  onUserGridClick() {
    alert('clicked');
  }


}
