import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { route } from './routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ListItemComponent } from './listitem/listitem.component';
import { StudentThumbnailComponent } from './listitem/studentthumbnail/studentthumbnail.component';
import { StudentInfoService } from './shared/studentinfo.service';
@NgModule({
  declarations: [
    NavBarComponent,
    ListItemComponent,
    StudentThumbnailComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(route)
  ],
  providers: [StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
