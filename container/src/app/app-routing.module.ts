import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowMfeComponent } from './show-mfe/show-mfe.component';
import { ParentContainerComponent } from './parent-container/parent-container.component';

const routes: Routes = [
  {path: '', component: ParentContainerComponent, pathMatch: 'full'},
  {path: 'mfe', component: ShowMfeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
