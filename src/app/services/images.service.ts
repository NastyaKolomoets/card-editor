import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { CardTypes } from '../models/types/card-types';
import { ICard } from '../models/card';

@Injectable()
export class ImagesService {
  uri = '/cards';

  constructor(private firebase: AngularFireStorage) {
  }

  upload(file: any): AngularFireUploadTask {
    const ref = this.firebase.ref(file.name);
    return this.firebase.upload(file.name, file);
  }
}
