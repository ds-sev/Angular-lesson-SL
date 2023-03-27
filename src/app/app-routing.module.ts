import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AboutComponent} from './pages/about/about.component'
import {CatalogComponent} from './pages/catalog/catalog.component'
import {ContactsComponent} from "./pages/contacts/contacts.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contacts', component: ContactsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
