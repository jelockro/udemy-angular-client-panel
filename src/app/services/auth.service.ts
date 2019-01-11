import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve,reject)=> {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData), err => reject(err))
    });
  }
}
