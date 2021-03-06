import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Form module import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Design: Navigation Controller
import { MatToolbarModule, MatMenuModule, MatSidenavModule } from '@angular/material';

// Material Design:  Form Controller
import { MatInputModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { MatAutocompleteModule, MatSelectModule, MatRadioModule } from '@angular/material';

// Material Design:  Layout
import { MatListModule, MatCardModule, MatStepperModule, MatTabsModule } from '@angular/material';

// Material Design:  Buttons & indicators
import { MatIconModule, MatButtonModule, MatChipsModule } from '@angular/material';

// Material Design:  Popups & Modals
import { MatDialogModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';

// Material Design:  Data Tables
import { MatTableModule, MatGridListModule  } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { MatNativeDateModule } from '@angular/material';

// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

// Angularfire2 modules import
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


// AGM - Angular Google Map
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { environment } from '../environments/environment';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// UI Components
import { PageNotFoundComponent } from './components/public/page-not-found/page-not-found.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { LocationService } from './services/location.service';
import { WelcomeComponent } from './components/auth/welcome/welcome.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';
import { UserListComponent } from './components/auth/user-list/user-list.component';
import { UserDetailsComponent } from './components/auth/user-details/user-details.component';
import { UserManagementService } from './services/user-management.service';
import { UserDetailsEditComponent } from './components/auth/user-details-edit/user-details-edit.component';
import { PublisherComponent } from './components/auth/publisher/publisher.component';
import { SubscriberComponent } from './components/auth/subscriber/subscriber.component';
import { OpentokService } from './services/opentok.service';

import { CardComponent } from './components/public/card/card.component';
import {FeatureManagementService} from './services/feature-management.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PublicHomeComponent,
    SignUpComponent,
    SignInComponent,
    WelcomeComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDetailsEditComponent,
    PublisherComponent,
    SubscriberComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule, MatMenuModule, MatSidenavModule,
    MatInputModule, MatGridListModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule ,
    MatAutocompleteModule, MatSelectModule, MatRadioModule,
    MatListModule, MatCardModule, MatStepperModule, MatTabsModule,
    MatIconModule, MatButtonModule, MatChipsModule,
    MatDialogModule, MatTooltipModule, MatSnackBarModule,
    MatTableModule,  FlexLayoutModule, MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvSzdeHdoyDIfhNb5BizqTUsqmsVgiMfM',
      libraries: ['places']
    }),
    AgmSnazzyInfoWindowModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  entryComponents: [
    UserDetailsEditComponent
  ],
  providers: [
    AuthenticationService,
    LocationService,
    UserManagementService,
    OpentokService,
    FeatureManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
