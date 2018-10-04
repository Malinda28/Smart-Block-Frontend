import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';

const router: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'signup' , component: SignUpComponent},
  { path: 'index' , component: HomeComponent},
  { path: 'article/:id' , component: ArticleComponent},
  { path: '' , redirectTo: '/index' , pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
