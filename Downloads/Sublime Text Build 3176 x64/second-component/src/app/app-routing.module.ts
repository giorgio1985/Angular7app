import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormPageComponent } from './form-page/form-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [

{ path: 'home', redirectTo: '/' },
{ path: 'about', component: AboutUsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: FormPageComponent },
{ path: 'subscribe', component: FormPageComponent },
{ path: 'welcome', component: WelcomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
