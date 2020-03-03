import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';
  
token;
  data:any={"email":"","password":""};

  constructor(public afAuth: AngularFireAuth){

  }

  // login(email: string, password: string) {
  //   this.afAuth
  //   .auth
  //   .signInWithEmailAndPassword(email, password)
  //   .then(res => {
  //   console.log('You are Successfully logged in!');
  //   })
  //   .catch(err => {
  //   console.log('Something is wrong:',err.message);
  //   });
  //   }

  onClickSubmit(data) {
    // alert("Entered Email id : " + data.email+"---"+data.password); 

    this.afAuth
      .auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => {
              alert(this.token = token)});
      alert('You are Successfully logged in!');
      })
      .catch(err => {
      alert('Something is wrong:');
      });
 }
}

//  gettoken(){
//  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   // Send token to your backend via HTTPS
//   // ...
// }).catch(function(error) {
//   // Handle error
// });
// }

  

