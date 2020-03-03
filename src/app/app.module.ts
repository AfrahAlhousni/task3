import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {environment} from 'src/environments/environment'

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// export const firebaseConfig= {
//   apiKey: "AIzaSyDEC96kVARxQc-EW7yy6HmDUwY4aPdkyeo",
//   authDomain: "task3-6dbf9.firebaseapp.com",
//   databaseURL: "https://task3-6dbf9.firebaseio.com",
//   projectId: "task3-6dbf9",
//   storageBucket: "task3-6dbf9.appspot.com",
//   messagingSenderId: "356259748976",
//   appId: "1:356259748976:web:f3208fbee758a48b8e28b5",
//   measurementId: "G-JJMZ9X63ZW"
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
