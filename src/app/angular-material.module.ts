import { NgModule } from '@angular/core';

/* Angular Materials Modules Import */
import { MdInputModule, MdButtonModule, MdCardModule, MdToolbarModule, MdSidenavModule } from '@angular/material';

@NgModule({
    imports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdSidenavModule
    ],
    exports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdSidenavModule
    ]
})

export class AngularMaterialModule {}
