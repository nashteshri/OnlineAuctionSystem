import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './auction/search/search.component';
import { AuctionModule } from './auction/auction.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BidFormComponent } from './auction/list-auction/bid-form/bid-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AuthInterceptor } from './auth.interceptor';
import { BidUpdateComponent } from './auction/list-auction/bid-update/bid-update.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    AuctionModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
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
