import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user = []as any;

  constructor(private _activated: ActivatedRoute, private _userService:UsersService) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.params["id"];
    this._userService.getUser(id).subscribe(user => {
      console.log(user);
      this.user = user;
    })
  }

}
