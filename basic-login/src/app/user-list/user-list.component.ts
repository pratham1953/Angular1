import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
 
})

export class UserListComponent {
users:UserModel[]=[];
private userSubscription!:Subscription;
  constructor(private userServ:UserService){}

ngOnInit():void{
  this.userSubscription=this.userServ.getUsers().subscribe((data: UserModel[])=>{
    this.users=data;
    console.log(this.users);
  });
}
ngOnDestroy():void{
  if(this.userSubscription){
this.userSubscription.unsubscribe();
  }
}
}
