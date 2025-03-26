import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerMock:jasmine.SpyObj<Router>;

  beforeEach( () => {
    routerMock=jasmine.createSpyObj('Router',['navigate']);
     TestBed.configureTestingModule({
      imports:[MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
       MatButtonModule,
       MatInputModule,
      BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers:[
        {provide:Router,useValue:routerMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have valid form',()=>{
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['password'].setValue('Password');
    expect(component.loginForm.valid).toBeTruthy();
  })
  it('should validate email format',()=>{
    const Emailcontrol=component.loginForm.controls['email']
    Emailcontrol.setValue('invalidemail');// inavlid email
    expect(Emailcontrol.valid).toBeFalsy();
    Emailcontrol.setValue('abc@gmail.com');// valid email
    expect(Emailcontrol.valid).toBeTruthy();
  })
  it('should validate password format',()=>{
    const PasswordControl= component.loginForm.controls['password']
    PasswordControl.setValue('123');//invalid password
    expect(PasswordControl.valid).toBeFalsy();
    PasswordControl.setValue('123456');// valid password
    expect(PasswordControl.valid).toBeTruthy();
  })
  it('Should  navigate to user-list on succesfull login',()=>{
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    component.onSubmit();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/user-list']);
  });
  it('should call onSumbit when login button is clicked',()=>{
    spyOn(component,'onSubmit');
    const button=fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  })
});
