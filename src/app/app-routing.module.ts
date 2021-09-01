import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGridListComponent } from './components/user-grid-list/user-grid-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  { path: '', component: UserGridListComponent },
  { path: 'user-gird', component: UserGridListComponent },
  { path: 'user-table', component: UserTableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
