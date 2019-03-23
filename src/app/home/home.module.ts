import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomePage } from './home.page';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  constructor(private router:Router){}
  onLogin(){
    this.router.navigate(['/login']);
  }
}
