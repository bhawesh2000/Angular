import { Component, OnInit } from '@angular/core';
//To make this component into a Dialog component we import MatDialog and MatDialogRef 
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { username:'', password:'', remember: false };

  constructor(public dialogref:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log('user:',this.user);
    this.dialogref.close();          //after form submitted dialog is closed automatically
  }

}
