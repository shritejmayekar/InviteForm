import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsService } from '../../app/forms.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  message: String = 'Hola Mundo!';
  croppedImage: any;
  public src: any;
 public originalImage: any;
  imageChangedEvent: any;
  constructor(public dialogRef: MatDialogRef<ChildComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any, private formService: FormsService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  saveImg(croppedImage) {
    // alert(JSON.stringify(this.data.dialogCrop));
    this.formService.setImage(croppedImage);

    // this.data.animal = croppedImage;
    this.dialogRef.close();

  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;
      const output = document.getElementById('output');
      output['src'] = dataURL;
      console.log(dataURL);
    };
  }

  imageCropped(image: string) {
    this.croppedImage = image;
    this.formService.setImage(image);
  }
  imageLoaded(image: string) {
    console.log(image);

  }

}
