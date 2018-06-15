import { Routes } from '@angular/router';
import { StudentThumbnailComponent } from './listitem/studentthumbnail/studentthumbnail.component';
import { ListItemComponent } from './listitem/listitem.component';

export const route: Routes = [
    { path: 'studentlist', component: StudentThumbnailComponent},
    { path: 'studentlist:id', component: StudentThumbnailComponent},
    { path: 'listitem', component: ListItemComponent},
    { path: '', redirectTo: '/listitem', pathMatch: 'full'}

];
