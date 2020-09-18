import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {flatMap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit, OnDestroy {

  user: User;
  asyncUser: Observable<User>;

  userSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.route.params.pipe(
      flatMap(params => this.userService.getUserByID(params.id))
    ).subscribe(user => this.user = user);
    this.asyncUser = this.getUser();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  getUser(): Observable<User> {
    return this.route.params.pipe(
      flatMap(params => this.userService.getUserByID(params.id))
    );
  }

}
