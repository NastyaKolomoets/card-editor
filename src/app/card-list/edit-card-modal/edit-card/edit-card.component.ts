import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/models/card';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})

export class EditCardComponent {
  @Input()
  card: ICard;

  constructor(private imagesService: ImagesService) { }

  getImageName() {
    return this.card.img.substring(this.card.img.lastIndexOf('/') + 1, this.card.img.indexOf('?'));
  }

  handleFileInput(file: any) {
    const uploadTask = this.imagesService.upload(file[0]);
    uploadTask
      .then(img => img.ref.getDownloadURL()
        .then(url => this.card.img = url)
        .catch(error => alert(`Failed to upload. ${error}`))
      .catch(error => alert(`Failed to upload. ${error}`)));
  }
}
