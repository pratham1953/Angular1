import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
 
})

export class UserListComponent {
users:UserModel[]=[];
  constructor(private userServ:UserService){}

ngOnInit():void{
  this.userServ.getUsers().subscribe((data: UserModel[])=>{
    this.users=data;
    console.log(this.users);
  });
}
}
