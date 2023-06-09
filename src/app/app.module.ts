import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {AboutComponent} from './pages/about/about.component';
import {CatalogComponent} from './pages/catalog/catalog.component'
import {RouterLink, RouterOutlet} from '@angular/router'
import {BookComponent} from "./components/book.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './pages/feedback/feedback/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ContactsComponent,
    AboutComponent,
    CatalogComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
