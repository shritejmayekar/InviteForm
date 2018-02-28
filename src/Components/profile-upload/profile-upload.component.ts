import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.component.html',
  styleUrls: ['./profile-upload.component.scss']
})
export class ProfileUploadComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  dialogCrop: any;
  animal: String = 'cat';
  name: String;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      height: '400px',
      width: '600px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
      // // this.animal = result;
     // this.dialogCrop = this.animal;
     console.log(this.animal);

    });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: '<input type="file" (change)="fileChangeEvent($event)" />' +
    '      <image-cropper [imageChangedEvent]="imageChangedEvent"' +
    ' [maintainAspectRatio]="true" [aspectRatio]="4 / 3" [resizeToWidth]="128"' +
    'format="png"(imageCropped) = "imageCropped($event)"(imageLoaded) =' +
    ' "imageLoaded()"(loadImageFailed) = "loadImageFailed()" > </image-cropper>' +
    '<button (click)="saveImg(croppedImage)" >Crop</button>',
  styleUrls: ['./profile-upload.component.scss']
})
export class DialogOverviewExampleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveImg(croppedImage) {
     alert();
    this.data.animal = croppedImage;
    this.dialogRef.close();

  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;

  }

}

}
