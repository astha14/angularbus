import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatComponent } from './seat/seat.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WalletComponent } from './wallet/wallet.component';
import { EnterPassengerDetailsComponent } from './enter-passenger-details/enter-passenger-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    TermsOfUseComponent,
    SearchbusComponent,
    ForgotpasswordComponent,
    AdminloginComponent,
    ProfileComponent,
    AdmindashboardComponent,
    AdminforgotpasswordComponent,
    ChangePasswordComponent,
    PaymentComponent,
    SeatComponent,
    UserdashboardComponent,
    WalletComponent,
    EnterPassengerDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
