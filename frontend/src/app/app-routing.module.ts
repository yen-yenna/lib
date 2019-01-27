import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './book/list/list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ProposalsComponent} from './proposals/proposals.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: 'book-list', component: ListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-profile', component: ProfileComponent},
  {path: 'book-proposals', component: ProposalsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
