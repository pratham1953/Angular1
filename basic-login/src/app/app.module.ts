import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import{  MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, UserListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}