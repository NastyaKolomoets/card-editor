import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadTask } from '@angular/fire/storage/interfaces';

@Injectable()
export class ImagesService {
  constructor(private firebase: AngularFireStorage) {
  }

  upload(file: any): UploadTask {
    return this.firebase.storage.ref(file.name).put(file);
  }
}
