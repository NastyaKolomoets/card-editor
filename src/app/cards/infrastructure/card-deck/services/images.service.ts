import { Injectable } from "@angular/core";
import { doc, Firestore, updateDoc } from "@angular/fire/firestore";

@Injectable()
export class ImagesService {
  constructor(private firestore: Firestore) {
  }

  async upload(file: any) {
    await updateDoc(doc(this.firestore, file.name), file);
  }
}
