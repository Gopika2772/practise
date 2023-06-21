import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private router: Router) { }
  username: string = " ";
  email: string = " ";
  address: string = " ";
  phonenumber: string = " ";
  dob: string = " ";

  update() {

  }

}
