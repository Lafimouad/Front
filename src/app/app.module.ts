import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { ManagerComponent } from './manager/manager.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NavbarAuthoritiesComponent } from './navbar-authorities/navbar-authorities.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account/account.component';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';
import { EventsComponent } from './events/events.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FoodComponent } from './food/food.component';
import { ToolsComponent } from './tools/tools.component';
import { DonationsComponent } from './donations/donations.component';
import { ForumComponent } from './forum/forum.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemeComponent } from './meme/meme.component';

import { ShelfComponent } from './shelf/shelf.component';
import { ListshelfsComponent } from './listshelfs/listshelfs.component';
import { ShelfService } from './shelf.service';

import { AddProductComponent } from './admin/add-product/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CancelComponent } from './cancel/cancel.component';
import { SucessComponent } from './sucess/sucess.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    ImageSliderComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
    DelivererComponent,
    ManagerComponent,
    NavbarAuthoritiesComponent,
    AccountInfoComponent,
    AccountComponent,
    VirtualVisitComponent,
    EventsComponent,
    ClothesComponent,
    AccessoriesComponent,
    FoodComponent,
    ToolsComponent,
    DonationsComponent,
    ForumComponent,
    AdvertisementsComponent,
    ProductsComponent,
    DashboardComponent,
    MemeComponent,
    ShelfComponent,
    ListshelfsComponent,

    AddProductComponent,

    CancelComponent,

    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
      
    NgbModule,
    HttpClientModule,ReactiveFormsModule,
    // add these modules
    MatCardModule,
    MatButtonModule,
    NoopAnimationsModule,
  
  ],
  
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
