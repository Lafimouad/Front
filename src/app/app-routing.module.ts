import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccountComponent } from './account/account.component';
import { AddProductComponent } from './admin/add-product/add-product/add-product.component';
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
import { ListshelfsComponent } from './listshelfs/listshelfs.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MemeComponent } from './meme/meme.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ToolsComponent } from './tools/tools.component';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';


const routes: Routes = [ 
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
    path: 'home/clothes',
    component: ClothesComponent
  },
  {
    path: 'home/tools',
    component: ToolsComponent
  },
  {
    path: 'home/accessories',
    component: AccessoriesComponent
  },
  {
    path: 'home/food',
    component: FoodComponent
  },
  {
    path: 'shelfs',
    component: ListshelfsComponent
  }
  ,
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
{ path: 'add-product', component: AddProductComponent },
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
