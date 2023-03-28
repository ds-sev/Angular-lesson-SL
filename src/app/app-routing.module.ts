import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AboutComponent} from './pages/about/about.component'
import {CatalogComponent} from './pages/catalog/catalog.component'
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {FormComponent} from "./pages/feedback/feedback/form.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: CatalogComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'form', component: FormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
