import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filteredFirstName: string;
  filteredLastName: string;
  filteredAge: number;
  filteredCity: string;

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

  firstNameFilter(firstName: string, users: User[]): User[] {
    const filteredUsers: User[] = [];
    users.forEach(user => {
      if (user.firstName === firstName) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

  lastNameFilter(lastName: string): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user.lastName === lastName) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

  ageFilter(age: number): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user.age === age) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

  cityFilter(city: string, users: User[]): User[] {
    const filteredUsers: User[] = [];
    users.forEach(user => {
      if (user.city === city) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filteredFirstName = params.firstName;
      this.filteredLastName = params.lastName;
      this.filteredAge = params.age;
      this.filteredCity = params.city;
    });
  }

}
