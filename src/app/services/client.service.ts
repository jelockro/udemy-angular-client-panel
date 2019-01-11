import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client'


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
}
