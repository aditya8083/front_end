import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {FlightDetailsComponent} from './flight-details/flight-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookingHistoryComponent} from './booking-history/booking-history.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchResultComponent} from './search/search-result/search-result.component';
import {SearchBarComponent} from './search/search-bar/search-bar.component';
import {SearchService} from './search/search.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatInputModule, MatListModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatStepperModule, MatTableModule, MatTabsModule} from '@angular/material';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { FlightBookingContainerComponent } from './flight-booking-container/flight-booking-container.component';
import {PassengerDetailsComponent} from './flight-booking-container/passenger-details/passenger-details.component';
import {FlightBookingService} from './flight-booking-container/flight.booking.service';
import { FlightBookingReviewComponent } from './flight-booking-container/flight-booking-review/flight-booking-review.component';
import { FlightViewComponent } from './shared/flight-view/flight-view.component';
import { PaymentComponent } from './payment/payment.component';
import {FlightBookingResultComponent} from './flight-booking-result/flight-booking-result.component';
import {PaymentService} from './payment/payment.service';
import {BookingResultService} from './flight-booking-result/booking-result-service.service';
import {CleanupService} from './shared/cleanup.service';


const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'booking/flight', component: FlightBookingContainerComponent},
  {path: 'confirmed/flight', component: FlightBookingResultComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FlightDetailsComponent,
    BookingHistoryComponent,
    UserProfileComponent,
    SearchResultComponent,
    SearchBarComponent,
    AuthComponent,
    FlightBookingContainerComponent,
    PassengerDetailsComponent,
    FlightBookingReviewComponent,
    FlightViewComponent,
    PaymentComponent,
    FlightBookingResultComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
    MatStepperModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [SearchService, FlightBookingService, PaymentService, BookingResultService, CleanupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
