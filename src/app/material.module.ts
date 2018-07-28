import { NgModule } from '@angular/core';
import { MatSidenavModule,
         MatListModule,
         MatIconModule,
        } from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ]
})
export class CustomMaterialModule {}
