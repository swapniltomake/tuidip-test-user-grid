import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      'id': 1,
      'first_name': 'Swapnil',
      'last_name': 'Tomake',
      'email': 'swapniltomake999@gmail.com'
    },
    {
      'id': 2,
      'first_name': 'name1',
      'last_name': 'surname1',
      'email': 'email1@domain.com'
    },
    {
      'id': 3,
      'first_name': 'name2',
      'last_name': 'surname2',
      'email': 'email2@domain.com'
    },
    {
      'id': 3,
      'first_name': 'name3',
      'last_name': 'surname3',
      'email': 'email3@domain.com'
    }
  ]
  constructor() {

  }


  getUsers() {
    return this.users;
  }
  getTableColumns() {
    return ['id', 'first_name', 'last_name', 'email'];
  }
}
