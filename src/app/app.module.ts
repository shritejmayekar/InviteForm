import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeDataComponent } from '../Components/employee-data/employee-data.component';
import { BankInformationComponent } from '../Components/bank-information/bank-information.component';
import { QualificationComponent } from '../Components/qualification/qualification.component';
import { PersonalDataComponent } from '../Components/personal-data/personal-data.component';
import { ProfileUploadComponent } from '../Components/profile-upload/profile-upload.component';
import { ThankYouMsgComponent } from '../Components/thank-you-msg/thank-you-msg.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { ErrorMatcherComponent } from './error-matcher/error-matcher.component';
import { FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    BankInformationComponent,
    QualificationComponent,
    PersonalDataComponent,
    ProfileUploadComponent,
    ThankYouMsgComponent,
    ErrorMatcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
