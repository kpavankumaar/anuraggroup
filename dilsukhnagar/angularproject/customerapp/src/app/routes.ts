import { Routes } from '@angular/router';
import { StudentThumbnailComponent } from './listitem/studentthumbnail/studentthumbnail.component';
import { ListItemComponent } from './listitem/listitem.component';
import { StudentDetailedInfoComponent } from './listitem/studentdetailedinfo/studentdetailedinfo.component';
import { Error404Component } from './error/404error.component';
export const route: Routes = [
    { path: 'studentlist', component: StudentThumbnailComponent},
    { path: 'studentlist/:id', component: StudentDetailedInfoComponent},
    { path: '404', component: Error404Component },
    { path: 'listitem', component: ListItemComponent},
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: '', redirectTo: '/listitem', pathMatch: 'full'}
];
