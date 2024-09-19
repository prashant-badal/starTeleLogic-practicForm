import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogsComponent } from './blogs/blogs.component';
import {RouterModule, Routes} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { XyzComponent } from './xyz/xyz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareersComponent } from './careers/careers.component';
import { CommonModule } from '@angular/common';


const appRoutes:Routes=[
  {path:"", component:ProfileComponent},
  
  {path:"careers", component:CareersComponent},

  {path:'blogs',component:BlogsComponent},
  {path:'contacts',component:ContactsComponent},
 
  
]
@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
    ProfileComponent,
    BlogsComponent,
    ContactsComponent,
    XyzComponent,
    CareersComponent,
 
   
  ],
  imports: [
    BrowserModule,ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(
      appRoutes
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
