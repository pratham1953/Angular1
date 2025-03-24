import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import{HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { UserModel } from './user.model';

describe('UserService', () => {
  let service: UserService;
  let httpTestCtrl:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
});
 beforeEach(() =>{
  service = TestBed.inject(UserService);// instance of service created
  httpTestCtrl=TestBed.inject(HttpTestingController);// instance for httpcontroller created
 });
afterEach(()=>{
  httpTestCtrl.verify();
})
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('it should retrive the users',()=>{
    const TestUser:UserModel[]=[
      { id:1, name:'Pratham',email:'xyz@gmail.com'},
      { id:2, name:'rolex',email:'abc@gmail.com'},
    ]
      service.getUsers().subscribe((users)=>{
      expect(TestUser).toBe(users,'check data');
    });

    const req=httpTestCtrl.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(TestUser);
    httpTestCtrl.verify();
});
});