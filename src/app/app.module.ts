import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminHomepageComponent } from './admin/admin-homepage.component';
import { AdminLoginComponent } from './admin/admin-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer/customer-login.component';
import { RegistrationComponent } from './customer/registration-form.component';
import { ProductComponent } from './product/product.component';
import { RetailerHomepage } from './retailer/retailer-homepage.component';
import { RetailerLoginComponent } from './retailer/retailer-login.component';
import { AdminService } from './admin/admin-service';
import { RetailerService } from './retailer/retailer-Service';
import { CustomerService } from './customer/customer-service';
import { ProductService } from './product/product-service';
import { FootwearComponent } from './product/categories/footwear/footwear.component';
import { ElectronicsComponent } from './product/categories/electronics/electronics.component';
import { MobileComponent } from './product/categories/mobile/mobile.component';

import { ClothingComponent } from './product/categories/clothing/clothings.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home/home.component';
import { CartComponent } from './cart-page/cart-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdminLoginComponent,
    RetailerLoginComponent,
    RetailerHomepage,
    RegistrationComponent,
    AdminHomepageComponent,
    CustomerLoginComponent,
    FootwearComponent,
    ElectronicsComponent,
    MobileComponent,
    HomePageComponent,
    ClothingComponent,
    HeaderComponent,
    CartComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent }
      , { path: 'admin-login', component: AdminLoginComponent }
      , { path: 'retailer-login', component: RetailerLoginComponent }
      , { path: 'retailer-homepage', component: RetailerHomepage }//register secon componet
      , { path: 'registration', component: RegistrationComponent }
      , { path: 'customer-login', component: CustomerLoginComponent }
      , { path: 'admin-homepage', component: AdminHomepageComponent }
      , { path: 'footwear-component', component: FootwearComponent }
      , { path: 'electronics-component', component: ElectronicsComponent }
      , { path: 'mobile-component', component: MobileComponent }
      ,{path:'colthings-component',component:ClothingComponent}
      ,{path:'header-component',component:HeaderComponent}
      ,{path:'home-page' , component:HomePageComponent}
      ,{path:'cart-page',component:CartComponent}
      ,{path:'payment-page', component:PaymentPageComponent}
    ])
  ],
  providers: [HttpClient, RetailerService, AdminService, CustomerService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
