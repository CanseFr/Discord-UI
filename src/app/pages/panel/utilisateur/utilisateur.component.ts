import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../service/__services/user/user.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit{

  constructor(private userService: UserService) {
  }

  listUser$ = this.userService.usersList;

  ngOnInit(): void {
    this.userService.getAllUser()
  }
}
