import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import {EmployeeDataComponent} from '../Components/employee-data/employee-data.component';
import { BankInformationComponent } from '../Components/bank-information/bank-information.component';
import { QualificationComponent } from '../Components/qualification/qualification.component';
import { PersonalDataComponent } from '../Components/personal-data/personal-data.component';
import { ProfileUploadComponent } from '../Components/profile-upload/profile-upload.component';
const routes: Routes = [
  {
    path: '',
    component: EmployeeDataComponent
  },
  {
    path: 'bankInfo',
    component: BankInformationComponent
  },
  {
    path: 'qualification',
    component: QualificationComponent
  },
  {
    path: 'personalData',
    component: PersonalDataComponent
  },
  {
    path: 'profileUpload',
    component: ProfileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
