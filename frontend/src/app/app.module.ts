import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { FormComponent } from './book/form/form.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './book/list/list.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppRoutingModule} from './app-routing.module';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatNativeDateModule,
  MatSelectModule,
} from '@angular/material';
import { AddComponent } from './book/add/add.component';
import { ReservationComponent } from './book/reservation/reservation.component';
import { RegisterComponent } from './register/register.component';
import { BoxComponent } from './box/box.component';
import { ProfileComponent } from './profile/profile.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { HomeComponent } from './components/home/home.component';
import { PlsDzialajComponent } from './pls-dzialaj/pls-dzialaj.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    LoginComponent,
    AddComponent,
    ReservationComponent,
    RegisterComponent,
    BoxComponent,
    ProfileComponent,
    ProposalsComponent,
    HomeComponent,
    PlsDzialajComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    ],
  providers: [
    AddComponent
  ],
  entryComponents: [
    AddComponent,
    BoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
