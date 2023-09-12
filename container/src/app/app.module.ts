import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMfeComponent } from './show-mfe/show-mfe.component';
import { ParentContainerComponent } from './parent-container/parent-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMfeComponent,
    ParentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
