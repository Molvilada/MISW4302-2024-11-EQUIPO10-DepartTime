import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from 'src/app/login/login.module';
import { ChangeProfileModule } from './change-profile/change-profile.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    FormsModule,
    ChangeProfileModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
