import { Component } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {
  users = [
    {
      name: "Gopika",
      email: "gopika@gmail.com",
      address: "chennai",
      dob: "july",
      phoneNumber: 12345678
    }
  ]
  updateUser(user: any) {

  }
  deleteUser(user: any) {

  }

}
