import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTask } from '@angular/fire/storage/interfaces';

@Injectable()
export class ImagesService {
  uri = '/cards';

  constructor(private firebase: AngularFireStorage) {
  }

  upload(file: any): UploadTask {
    const ref = this.firebase.ref(file.name);
    return this.firebase.storage.ref(file.name).put(file);
  }
}
