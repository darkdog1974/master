import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from "./app.component";
import { UmsComponent } from "./ums.component";
import { environment } from "../environments/environment";
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  declarations: [AppComponent, UmsComponent, NavComponent, UsersComponent, UserComponent, UserDetailsComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
