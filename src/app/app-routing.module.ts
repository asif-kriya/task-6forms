import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

const routes: Routes = [
  {
    path:"contact",
    component:ContactDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
