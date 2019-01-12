import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private afAuth: AngularFireAuth,
      private router: Router,
      ) { }

    canActivate(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(auth => {
            if(!auth){
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }));
    }   

}
