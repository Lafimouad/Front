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
import { DeliveryComponent } from './delivery/delivery.component';
import {DataTablesModule} from 'angular-datatables';
import { DelivererSarraComponent } from './deliverer-sarra/deliverer-sarra.component';
import { AddDelSarraComponent } from './add-del-sarra/add-del-sarra.component';
import { UpdateDelSarraComponent } from './update-del-sarra/update-del-sarra.component';
import { AddDeliverySarraComponent } from './add-delivery-sarra/add-delivery-sarra.component';
import { UpdateDeliverySarraComponent } from './update-delivery-sarra/update-delivery-sarra.component';
import { MapsSarraComponent } from './maps-sarra/maps-sarra.component';
import { OrderSarraComponent } from './order-sarra/order-sarra.component';
import { FormSarraComponent } from './form-sarra/form-sarra.component';
import { PromotionComponent } from './promotion/promotion.component';

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
    DeliveryComponent,
    DelivererSarraComponent,
    AddDelSarraComponent,
    UpdateDelSarraComponent,
    AddDeliverySarraComponent,
    UpdateDeliverySarraComponent,
    MapsSarraComponent,
    OrderSarraComponent,
    FormSarraComponent,
    PromotionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
