import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import {EmployeeDataComponent} from '../Components/employee-data/employee-data.component';
import { BankInformationComponent } from '../Components/bank-information/bank-information.component';
import { QualificationComponent } from '../Components/qualification/qualification.component';
import { PersonalDataComponent } from '../Components/personal-data/personal-data.component';
import { ProfileUploadComponent } from '../Components/profile-upload/profile-upload.component';
import { HomeComponent } from '../Components/home/home.component';
import { SocialDetailsComponent } from '../Components/social-details/social-details.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'socialDetails',
    component: SocialDetailsComponent
  },
  {
    path: 'employeeData/:token',
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
