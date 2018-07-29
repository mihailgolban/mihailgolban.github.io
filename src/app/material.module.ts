import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule
  ]
})
export class CustomMaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/mdi.svg'));
}
