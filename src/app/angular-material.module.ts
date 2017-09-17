import { NgModule } from '@angular/core';

/* Angular Materials Modules Import */
import { MdInputModule, MdButtonModule, MdCardModule, MdToolbarModule, MdSidenavModule, MdGridListModule } from '@angular/material';

@NgModule({
    imports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdSidenavModule,
        MdGridListModule
    ],
    exports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdSidenavModule,
        MdGridListModule
    ]
})

export class AngularMaterialModule {}
