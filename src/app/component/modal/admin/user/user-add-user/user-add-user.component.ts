import {Component, Inject, Injectable} from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../../../../../service/__services/user/user.service";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-user-add-user',
  templateUrl: './user-add-user.component.html',
  styleUrls: ['./user-add-user.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, NgIf, ReactiveFormsModule, MatAutocompleteModule, AsyncPipe, NgForOf, MatSelectModule],
})
export class UserAddUserComponent {

  body?:any

  constructor(  private userService: UserService,
                private formBuilder: FormBuilder) {}

  ngOnInit() {
// Charger data
  }

  formulaire:FormGroup = this.formBuilder.group({
    firstname: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(20)] ],
    lastname: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(20)] ],
    email: ["", [Validators.required,Validators.email] ],
    channel: ["", []],
    groupe: ["", []],
  })

  // CHANNEL
  optionsChannel: string[] = ['C1', 'C2', 'C3'];
  selectedChannel?:string;

  // Groupe
  optionsGroupe: string[] = ['Java', 'C#', 'Ran3'];
  selectedGroupe?:string;


  onSubmit(){
    if(this.formulaire.valid){
      this.userService.addUser({...this.formulaire.value,channel:this.selectedChannel,groupe:this.selectedGroupe,password:"TOINITINBACK"}).subscribe( x => this.userService.getAllUser())
    }
  }


}
