import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { SecretComponent } from './secret/secret.component';
import { TableService } from './table.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TableParentComponent } from './table-parent/table-parent.component';

@NgModule({
  declarations: [
     AppComponent,
     TableComponent,
     HomeComponent,
     SecretComponent,
     TableParentComponent,
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     HttpClientModule,
	   FormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
