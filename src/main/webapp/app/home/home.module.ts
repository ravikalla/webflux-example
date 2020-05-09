import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestreactSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [TestreactSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class TestreactHomeModule {}
