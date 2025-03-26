import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceMock:jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceMock=jasmine.createSpyObj('UserService',['getUsers']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatCardModule,MatListModule],
      declarations: [ UserListComponent ],
      providers:[{provide:UserService,useValue:userServiceMock}]
    }) .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should display users',()=>{
 const dummyUsers=[
  { id:1, name:'pratham',email:'xyz@gmail.com'},
  { id:2, name:'rolex',email:'abc@gamil.com'},
 ]
 userServiceMock.getUsers.and.returnValue(of(dummyUsers));
 fixture.detectChanges();
 const userElemet:DebugElement[]=fixture.debugElement.queryAll(By.css('mat-list-item'));
 expect(userElemet.length).toBe(2);
 expect(userElemet[0].nativeElement.textContent).toContain('pratham');
 expect(userElemet[1].nativeElement.textContent).toContain('rolex');
  });
  it('should unsubscribe on destroy',()=>{
    const mockSubscription=jasmine.createSpyObj('Subscription',['unsubscribe']);
   component['userSubscription']=mockSubscription;
   component.ngOnDestroy();
   expect(mockSubscription.unsubscribe).toHaveBeenCalled();
  })
});
