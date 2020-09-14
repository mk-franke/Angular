import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterObject: User = {
    firstName: null,
    lastName: null,
    age: null,
    city: null
  };

  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Miller',
      age: 21,
      city: 'Berlin'
    },
    {
      firstName: 'Billy',
      lastName: 'Klein',
      age: 40,
      city: 'Los Angeles'
    },
    {
      firstName: 'James',
      lastName: 'McCain',
      age: 56,
      city: 'Washington'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      Object.keys(params).forEach((key) =>
        this.filterObject[key] = params[key]
      );
    });
  }

  filter(users: User[], filter: User): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      Object.keys(filter).forEach(key => {
        if (filter[key] !== null) {
          if (user[key].toString() === filter[key].toString()) {
            filteredUsers.push(user);
          }
        }
      });
    });
    return filteredUsers.length === 0 ? users : filteredUsers;
  }

}
