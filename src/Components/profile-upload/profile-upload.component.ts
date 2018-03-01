import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ChildComponent} from '../../Components/child/child.component';
import { FormsService } from '../../app/forms.service';
import { Location } from '@angular/common';
import { DataService } from '../../app/data.service';
import {environment} from '../../environments/environment';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.component.html',
  styleUrls: ['./profile-upload.component.scss']
})
export class ProfileUploadComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  dialogCrop: any;
  original: any;
  animal: String = 'cat';
  name: String;
  message: string;
  constructor(public dialog: MatDialog, private formService: FormsService ,
    private location: Location , private commonService: DataService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChildComponent, {
      height: '400px',
      width: '600px',
      data: { name: this.name, animal: this.animal, dialogCrop: this.dialogCrop,
         original: this.original}
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
      // // this.animal = result;
     // this.dialogCrop = this.animal;
      const contentType = 'image/png';
       // const b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAY'  +
      // 'AAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
     // const b64Data = this.dialogCrop.replace('data:image/png;base64,', '\s');
     // const blob = b64toBlob(b64Data, contentType);
     // const blobUrl = URL.createObjectURL(blob);
     // console.log(blobUrl);
     // const img = document.createElement('img');
     console.log(this.animal);
      this.dialogCrop = this.formService.getImage();
      console.log(this.dialogCrop);
      const b64Data = this.dialogCrop.replace('data:image/png;base64,', '');
      console.log(b64Data);
     const blob = b64toBlob(b64Data, contentType);
     const blobUrl = URL.createObjectURL(blob);
     console.log(blobUrl);
      this.datas = {
        'croppedImage': blobUrl,
        'originalImage': blobUrl,
        'imageName': 'frog.jpg'
      };

      this.commonService.postService(environment.baseUrl + 'addEmployeeData?' +
        'formSection=profileImageDetails&employeeToken=' +
        JSON.parse(localStorage.getItem('EmployeeToken')),
        this.datas)
        .subscribe(data => {
          console.log(data);
        });


    });
    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: contentType });
      return blob;
    };



  }
  previous() {
    this.location.back();

  }
  // fileChangeEvent(event: any): void {
  //   this.imageChangedEvent = event;
  // }
  // imageCropped(image: string) {
  //   this.croppedImage = image;
  // }

}

// @Component({
//   selector: 'app-dialog-overview-example-dialog',
//   template: '<input type="file" (change)="fileChangeEvent($event)" />' +
//     '      <image-cropper [imageChangedEvent]="imageChangedEvent"' +
//     ' [maintainAspectRatio]="true" [aspectRatio]="4 / 3" [resizeToWidth]="128"' +
//     'format="png"(imageCropped) = "imageCropped($event)"(imageLoaded) =' +
//     ' "imageLoaded()"(loadImageFailed) = "loadImageFailed()" > </image-cropper>' +
//     '<button (click)="saveImg(croppedImage)" >Crop</button>',
//   styleUrls: ['./profile-upload.component.scss']
// })
// export class DialogOverviewExampleComponent {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   saveImg(croppedImage) {
//      alert();
//     this.data.animal = croppedImage;
//     this.dialogRef.close();

//   }
//   fileChangeEvent(event: any): void {
//     this.imageChangedEvent = event;
//   }
//   imageCropped(image: string) {
//     this.croppedImage = image;

//   }

// }

