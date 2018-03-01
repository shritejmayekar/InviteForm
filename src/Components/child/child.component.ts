import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsService } from '../../app/forms.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  message: String = 'Hola Mundo!';
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
  }
  imageCropped(image: string) {
    this.croppedImage = image;
    this.formService.setImage(image);

  }


}
