import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SearchComponent } from './auction/search/search.component';
import { AuctionModule } from './auction/auction.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BidFormComponent } from './bidding/bid-form/bid-form.component';
import { BidHistoryComponent } from './bidding/bid-history/bid-history.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
@NgModule({
  declarations: [
    NavBarComponent,
    AppComponent,
    FooterComponent,
    SearchComponent,
    BidFormComponent,
    BidHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AuctionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options:{
                  darkModeSelector:false || 'none'
                }
            }
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
