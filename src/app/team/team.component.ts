import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public users = []as any;

  public photos = []as any;

  constructor(private _usersService: UsersService,private _photoService: PhotosService) { }

  ngOnInit(): void {
    this._usersService.getAllUsers().subscribe((data) => {
      this.users = data;
    })

    this._photoService.getAllPhotos().subscribe((data) => {
      this.photos = data;
    })

  }

}
