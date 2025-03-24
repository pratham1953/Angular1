import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import{RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();// checking for component initilisation
  });

  it(`should have as title 'basic-login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('basic-login');// title property is correct
  });

  it('should render router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();// router-outlet exists
  });
});
