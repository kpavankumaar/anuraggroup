import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ListItemComponent } from './listitem/listitem.component';
import { StudentThumbnailComponent } from './listitem/studentthumbnail/studentthumbnail.component';
@NgModule({
  declarations: [
    NavBarComponent,
    ListItemComponent,
    StudentThumbnailComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
