import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { StoreComponent } from './store/store.component';
import { SettingsComponent } from './settings/settings.component';

const page: Routes = [
  {path:"library", component:LibraryComponent},
  {path:"settings", component:SettingsComponent},
  {path:"store", component:StoreComponent},
  {path: "", redirectTo:"/library", pathMatch: "full"}
   ];

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    StoreComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(page),FormsModule,HttpClientModule,Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
