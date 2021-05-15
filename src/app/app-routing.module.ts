import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ClientComponent } from './client/client.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { DonationsComponent } from './donations/donations.component';
import { EventsComponent } from './events/events.component';
import { FoodComponent } from './food/food.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MemeComponent } from './meme/meme.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ToolsComponent } from './tools/tools.component';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DelivererSarraComponent } from './deliverer-sarra/deliverer-sarra.component';
import { AddDelSarraComponent } from './add-del-sarra/add-del-sarra.component';
import { UpdateDelSarraComponent } from './update-del-sarra/update-del-sarra.component';
import { AddDeliverySarraComponent } from './add-delivery-sarra/add-delivery-sarra.component';
import { UpdateDeliverySarraComponent } from './update-delivery-sarra/update-delivery-sarra.component';
import { MapsSarraComponent } from './maps-sarra/maps-sarra.component';
import { OrderSarraComponent } from './order-sarra/order-sarra.component';
import { FormSarraComponent } from './form-sarra/form-sarra.component';
import { PromotionComponent } from './promotion/promotion.component';







const routes: Routes = [ 
  {
    path :'promotion', 
    component : PromotionComponent
  },

  {
    path :'SarraOrder/formSarra', 
    component : FormSarraComponent
  },
   
  {
    path :'SarraOrder', 
    component : OrderSarraComponent
  },
  {
    path :'SarraOrder/SarraMaps', 
    component : MapsSarraComponent
  },
  {
    path :'delivery/updateDelivery', 
    component : UpdateDeliverySarraComponent
  },
  {
    path :'delivery/addDelivery', 
    component : AddDeliverySarraComponent
  },
  {
    path :'deliverySarra/upDev', 
    component : UpdateDelSarraComponent
  },
  {
    path :'deliverySarra/addDev', 
    component : AddDelSarraComponent
  },
  {
    path :'deliverySarra', 
    component : DelivererSarraComponent
  },
  {
    path :'delivery', 
    component : DeliveryComponent
  },
  {
    path :'meme', 
    component : MemeComponent
  },
  {
    path :'dashboard', 
    component : DashboardComponent
  },
  {
    path :'products', 
    component : ProductsComponent
  },
  {
    path :'account', 
    component : AccountComponent
  },
  {
    path :'ads', 
    component : AdvertisementsComponent
  },
  {
    path :'contact', 
    component : ContactComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'accessories',
    component: AccessoriesComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'donations',
    component: DonationsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
{
  path: 'virtualvisit',
  component: VirtualVisitComponent
},
{
    path: 'forum',
    component: ForumComponent
},  
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'client',
  component: ClientComponent
},
{
  path: 'deliverer',
  component: DelivererComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'manager',
  component: ManagerComponent
},
{
  path: 'auth/login',
  component: LoginComponent
},
{
  path: 'signup',
  component: RegisterComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{path: '**', component: MemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
